// Part 0 GRIDS specific

// Part 1, import dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Strategy, discoverAndCreateClient } = require("passport-curity");
const http = require("http");
const https = require("https");
const jose = require("node-jose");
const fs = require("fs");
const Kyb = require("../../config/mongooseSchema");
const repo = require("../../repository/kybRepo");
const { JWK, JWE } = require("node-jose");
import { defaultClaims } from "../../config/defaultOidcClaims";
import { getSessionData, setOrUpdateSessionData } from "../../services/redis";
import { getUserByeIDASIdenitifier } from "../../repository/kybRepo";

// Part 3, create a JWKS
const keyStore = jose.JWK.createKeyStore();
keyStore
  .generate("RSA", 2048, { alg: "RSA-OAEP-256", use: "enc" })
  .then((result) => {
    fs.writeFileSync(
      "keys.json",
      JSON.stringify(keyStore.toJSON(true), null, "  ")
    );
  });

// Part 4, configuration of Passport
const getConfiguredPassport = async (
  isProduction,
  serverEndpoint,
  claims = defaultClaims
) => {
  let _issuer_url = process.env.ISSUER_URL
    ? process.env.ISSUER_URL
    : "https://vm.project-grids.eu:8180/auth/realms/grids";
  // let _client_id = process.env.OIDC_CLIENT_ID?process.env.OIDC_CLIENT_ID:"test"
  // let _client_secret = process.env.OIDC_CLIENT_SECRET?process.env.OIDC_CLIENT_SECRET:"5814f193-2ef3-45ee-967c-e4e647d9bc48"

  let _redirect_uri = isProduction
    ? process.env.OIDC_REDIRECT_URI
    : `http://localhost:5000/login/callback`;

  let vc_redirect_uri = isProduction
    ? process.env.VC_REDIRECT_URI
    : `http://localhost:5000/vc/response/kyb`;

  let jwks_uri = process.env.JWKS_URI
    ? process.env.JWKS_URI
    : `${serverEndpoint}/jwks`;

  // Part 4a, get dynamic registration client id and secret
  const dynamicClient = JSON.parse(
    await getDynClient([_redirect_uri, vc_redirect_uri], jwks_uri)
  );
  const dynClientId = dynamicClient.client_id;
  const dynClientSecret = dynamicClient.client_secret;

  // console.log({
  //   issuerUrl: _issuer_url,
  //   clientID: dynClientId,
  //   clientSecret: dynClientSecret,
  //   redirectUris: [_redirect_uri],
  // });

  // Part 4b, discover Curity Server metadata and configure the OIDC client
  const client = await discoverAndCreateClient({
    issuerUrl: _issuer_url,
    clientID: dynClientId,
    clientSecret: dynClientSecret,
    redirectUris: [_redirect_uri],
  });

  let _user_info_request = process.env.USER_INFO
    ? process.env.USER_INFO
    : "vm.project-grids.eu";
  let _user_info_port = process.env.USER_INFO_PORT
    ? process.env.USER_INFO_PORT
    : "8180";
  // Part 4c, configure the passport strategy
  addClaimsToStrategy(
    claims,
    passport,
    _user_info_request,
    _user_info_port,
    client
  );

  // Part 4e, tell passport how to serialize and deserialize user data
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  // creates a dynamic client for registration
  function getDynClient(redirectURIs, jwksURI) {
    const data = JSON.stringify({
      application_type: "web",
      redirect_uris: redirectURIs,
      client_name: "GridsUAegean",
      subject_type: "pairwise",
      token_endpoint_auth_method: "client_secret_basic",
      jwks_uri: jwksURI,
      userinfo_encrypted_response_alg: "RSA-OAEP-256",
      userinfo_encrypted_response_enc: "A128CBC-HS256",
    });

    const options = {
      hostname: "vm.project-grids.eu",
      port: 8180,
      path: "/auth/realms/grids/clients-registrations/openid-connect",
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3NDdiMzRmNy02YmZjLTRhODgtODgxYS0wYjlhNWQ3NjZmOTgifQ.eyJleHAiOjAsImlhdCI6MTYzNDgxNzI1MiwianRpIjoiYzNiNjZiNjEtOTg5Yy00ZmY5LWJlNGQtNTdmZmJiMDIxODM1IiwiaXNzIjoiaHR0cHM6Ly92bS5wcm9qZWN0LWdyaWRzLmV1OjgxODAvYXV0aC9yZWFsbXMvZ3JpZHMiLCJhdWQiOiJodHRwczovL3ZtLnByb2plY3QtZ3JpZHMuZXU6ODE4MC9hdXRoL3JlYWxtcy9ncmlkcyIsInR5cCI6IkluaXRpYWxBY2Nlc3NUb2tlbiJ9.-0XGFJobxqzvtLeJby9geLLOptj8ofFUwJQpknEqpyY`,
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    return new Promise((resolve, reject) => {
      let req = https.request(options);

      req.on("response", (res) => {
        const chunks = [];
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          resolve(body.toString());
        });
      });

      req.on("error", (err) => {
        reject(err);
      });
      req.write(data);
      req.end();
    });
  }

  router.use(passport.initialize());
  router.use(passport.session());
  // Part 2, configure authentication endpoints
  router.get("/", passport.authenticate("curity")); //listens to /login
  router.post("/", passport.authenticate("curity")); //listens to /login
  router.get(
    "/callback",
    async (req, res, next) => {
      // console.log(req.session)
      // console.log("***************")
      // console.log(req.sessionStore.sessions)
      // console.log(req.sessionStore.sessions)
      // console.log(req.sessionStore)

      // let key = Object.keys(req.sessionStore.sessions)[0];
      // let oidcSession = JSON.parse(req.sessionStore.sessions[key])[
      //   "oidc:vm.project-grids.eu"
      // ];
      // req.session["oidc:vm.project-grids.eu"] = oidcSession;
      next();
    },
    passport.authenticate("curity", { failureRedirect: "/login" }), //listens to /login/callback
    async (req, res) => {
      console.log("passport.js:: will now redirect to the view");
      // console.log(req.user);
      // read cookies
      // console.log("cookies!!!!")
      // console.log(req.cookies);
      // console.log("*************")
      let sessionId = req.cookies.sessionId;
      // console.log(`sessionId: ${sessionId}`)
      // console.log("PASSPORT.JS REQ.USEr");
      // console.log(req.user);

      await setOrUpdateSessionData(sessionId, "userDetails", req.user);
      let redirect_uri =
        req.cookies.kyb === "false"
          ? "/validate-relation"
          : `/vc/issue/kybResponse?sessionId=${req.cookies.kyb}`;

      if (req.cookies.kyb !== "false") {
        let personalIdentifier = req.user.personal_number;
        console.log(
          "passport.js passport.authenticate :: user with eIDAS " +
            personalIdentifier
        );
        //TODO call the registry for user data
        //if not found then error
        let userFound = await getUserByeIDASIdenitifier(personalIdentifier);
        if (!userFound) {
          console.log("no user found in mongo. This means that the user is not registerd so will display error")
          redirect_uri = "/userNotFound";
        } else {
          console.log(
            `founda mathcing user in the public registry for ${personalIdentifier} will add to session ${sessionId}`
          );
          setOrUpdateSessionData(sessionId,"kybProfile",userFound)
        }
      }

      console.log(`will redirect to ${redirect_uri}`);
      res.redirect(redirect_uri);
    }
  );
  return { passport: passport, client: client };
};

function getDataFromDPs(_user_info_request, _user_info_port, accessToken) {
  const options = {
    hostname: _user_info_request,
    port: _user_info_port,
    path: "/auth/realms/grids/protocol/openid-connect/userinfo",
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Length": "0",
    },
  };
  return new Promise((resolve, reject) => {
    const httpsReq = https.request(options, function (res) {
      const chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", async function () {
        const body = Buffer.concat(chunks);
        console.log("******* USER INFO **********************");
        // console.log(body.toString());
        const resJson = JSON.parse(body.toString());
        console.log(resJson);
        console.log("******* USER INFO END **********************");
        //TODO consolidate many sources!!
        if (resJson._claim_sources.src1) {
          try {
            let claimsFromDPs = await sendToken(
              resJson._claim_sources.src1.access_token,
              resJson._claim_sources.src1.endpoint
            );
            resolve(claimsFromDPs);
          } catch (err) {
            console.log("error in try of getDataFromDPs");
            console.log(err);
            reject(err);
          }
        } else {
          reject({ error: "no claim sources found in response" });
        }
      });
    });
    httpsReq.end();
  });
}

async function sendToken(accessToken, endpoint) {
  return new Promise(function (resolve, reject) {
    const epParts = endpoint.split("/");
    const host = epParts[2].split(":")[0];
    const port = epParts[2].split(":")[1];
    const path = "/" + epParts[3];

    const options = {
      hostname: host,
      port: 8050,
      path: path,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const req = https.request(options, (res) => {
      // console.log("statusCode:", res.statusCode);
      // console.log("headers:", res.headers);

      const chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const payload = body.toString();
        const ks = fs.readFileSync("keys.json");
        jose.JWK.asKeyStore(ks.toString()).then(async (keyStore) => {
          //decrypt received data
          // console.log("===========>Response from DP::");
          // console.log(payload);
          let errorPayload = {};
          try {
            errorPayload = JSON.parse(payload);
          } catch (error) {
            console.log("passport.js no error payload found! This is good");
          }
          if (payload.length === 0) {
            console.log(
              "passport.js no payload was found, empty string returned"
            );
            resolve();
          } else {
            if (errorPayload.error) {
              console.log("will reject with error");
              console.log("will reject with error");
              reject(errorPayload.error);
            } else {
              console.log("===========><==================");
              const decrypted = await JWE.createDecrypt(keyStore).decrypt(
                payload
              );
              const body = Buffer.from(decrypted.plaintext);
              const resJson = JSON.parse(body.toString());
              console.log("******* DECRYPTED DP RESPONSE**************");
              resJson.verified_claims.verified_claims.forEach((element) => {
                console.log("verified claim found");
                console.log(element);
                console.log(element.verification.evidence);
              });
              // console.log(resJson.verified_claims.verified_claims)
              console.log("********************************************");
              // add decrypted data to database
              //
              // repo.addDataToDb(resJson.verified_claims.verified_claims[0].claims);
              resolve(resJson.verified_claims.verified_claims[0].claims);
            }
          }
        });
      });
    });

    req.on("error", (e) => {
      console.error(e);
    });
    req.end();
  });
}

/*
 claims,
    passport,
    _user_info_request,
    _user_info_port,
    client,
    jwt
*/

const addClaimsToStrategy = (
  claims,
  passport,
  _user_info_request,
  _user_info_port,
  client,
  jwt = null
) => {
  let finalParams = {};
  if (jwt) {
    console.log(`passport.js: ${jwt}`);
    finalParams = {
      scope: "openid profile",
      request: jwt,
    };
  } else {
    finalParams = {
      scope: "openid profile",
      claims: claims,
    };
  }

  const strategy = new Strategy(
    {
      client,
      params: finalParams,
      fallbackToUserInfoRequest: true,
    },

    async function (accessToken, refreshToken, profile, cb) {
      try {
        let userData = await getDataFromDPs(
          _user_info_request,
          _user_info_port,
          accessToken
        );

        // console.log("loged in user profile")
        // console.log(profile)
        // console.log("userData")
        // console.log(userData)

        return cb(null, { ...userData, ...profile.verified_claims.claims });
      } catch (err) {
        console.log(err);
        return cb(null, { error: err });
      }
    }
  );

  // Part 4d, tell passport to use the strategy
  passport.use(strategy);
};

// Part 4, export objects
exports = module.exports;
exports.getConfiguredPassport = getConfiguredPassport;
exports.passportController = router;
exports.addClaimsToStrategy = addClaimsToStrategy;
