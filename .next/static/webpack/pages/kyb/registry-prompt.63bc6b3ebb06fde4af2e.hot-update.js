webpackHotUpdate_N_E("pages/kyb/registry-prompt",{

/***/ "./pages/kyb/registry-prompt.js":
/*!**************************************!*\
  !*** ./pages/kyb/registry-prompt.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_ValidateKYBComp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ValidateKYBComp */ \"./components/ValidateKYBComp.js\");\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Wizard = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Wizard, _React$Component);\n\n  var _super = _createSuper(Wizard);\n\n  function Wizard(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Wizard);\n\n    _this = _super.call(this, props);\n    _this.addUserToRegistry = _this.addUserToRegistry.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.proceedToKeycloak = _this.proceedToKeycloak.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.state = {\n      addedToRegistry: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Wizard, [{\n    key: \"addUserToRegistry\",\n    value: function addUserToRegistry() {\n      var _this2 = this;\n\n      var sessionId = this.props.sessionId;\n      var reqObj = {\n        sessionId: sessionId\n      };\n      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(\"/registry/add\", reqObj).then(function (response) {\n        console.log(response);\n\n        _this2.setState({\n          addedToRegistry: true\n        });\n      }); //TODO add here the send email callback\n    }\n  }, {\n    key: \"proceedToKeycloak\",\n    value: function proceedToKeycloak() {\n      console.log(\"proceed to keycloak\");\n      window.location.href = this.props.keycloakUrl;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var addToRegistryDiv = !this.state.addedToRegistry ? __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3 rem\"\n        }\n      }, __jsx(\"button\", {\n        onClick: this.addUserToRegistry\n      }, \"Register\")) : __jsx(\"div\", {\n        style: {\n          margin: \"3 rem 3 rem 3 rem 3 rem\"\n        }\n      }, \"Thank you for registering\");\n      return __jsx(\"div\", {\n        className: \"container\",\n        style: {\n          marginTop: \"3rem\"\n        }\n      }, __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, \"Please review the attributes retrieved, presented below. If you are certain that these attributes correctly identify you please click the Next button. Additionally, if you would like you can  add your Company\\u2019s KYB profile in the public registry in an easily Verifiable Format? If you opt in for this feature the public profile of your organization will be easily verified by anyone (public authorities, B2B transactions etc.) greatly facilitating your dealings with these parties. If Yes, please click the \\u201CRegister\\u201D button\"), __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, \"Details:\"), __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, __jsx(_components_ValidateKYBComp__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        userDetails: this.props.userDetails\n      })), addToRegistryDiv, __jsx(\"div\", {\n        className: \"row\",\n        style: {\n          marginBottom: \"3rem\"\n        }\n      }, __jsx(\"button\", {\n        onClick: this.proceedToKeycloak\n      }, \"Finish\")));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var reduxStore, req;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                reduxStore = _ref.reduxStore, req = _ref.req;\n                return _context.abrupt(\"return\", {\n                  userDetails: req.userDetails,\n                  selfLei: req.selfLei,\n                  sessionId: req.sessionId,\n                  keycloakUrl: req.keycloakRedirectURI\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Wizard;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    test: \"Test\"\n  };\n}\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Wizard));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva3liL3JlZ2lzdHJ5LXByb21wdC5qcz82NTMwIl0sIm5hbWVzIjpbIldpemFyZCIsInByb3BzIiwiYWRkVXNlclRvUmVnaXN0cnkiLCJiaW5kIiwicHJvY2VlZFRvS2V5Y2xvYWsiLCJzdGF0ZSIsImFkZGVkVG9SZWdpc3RyeSIsInNlc3Npb25JZCIsInJlcU9iaiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImtleWNsb2FrVXJsIiwiYWRkVG9SZWdpc3RyeURpdiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInVzZXJEZXRhaWxzIiwicmVkdXhTdG9yZSIsInJlcSIsInNlbGZMZWkiLCJrZXljbG9ha1JlZGlyZWN0VVJJIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ0ZXN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2Qix5R0FBekI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIseUdBQXpCO0FBQ0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLEVBQUU7QUFETixLQUFiO0FBSmlCO0FBT2xCOzs7O1dBYUQsNkJBQW9CO0FBQUE7O0FBQ2xCLFVBQUlDLFNBQVMsR0FBRyxLQUFLTixLQUFMLENBQVdNLFNBQTNCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHO0FBQUVELGlCQUFTLEVBQUVBO0FBQWIsT0FBZjtBQUNBRSxrREFBSyxDQUFDQyxJQUFOLENBQVcsZUFBWCxFQUE0QkYsTUFBNUIsRUFBb0NHLElBQXBDLENBQXlDLFVBQUNDLFFBQUQsRUFBYztBQUNyREMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBQ0EsY0FBSSxDQUFDRyxRQUFMLENBQWM7QUFDWlQseUJBQWUsRUFBRTtBQURMLFNBQWQ7QUFHRCxPQUxELEVBSGtCLENBU2xCO0FBQ0Q7OztXQUVELDZCQUFvQjtBQUNsQk8sYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQUUsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixLQUFLakIsS0FBTCxDQUFXa0IsV0FBbEM7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQUtmLEtBQUwsQ0FBV0MsZUFBWixHQUNyQjtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRWUsc0JBQVksRUFBRTtBQUFoQjtBQUE1QixTQUNFO0FBQVEsZUFBTyxFQUFFLEtBQUtuQjtBQUF0QixvQkFERixDQURxQixHQUtyQjtBQUFLLGFBQUssRUFBRTtBQUFFb0IsZ0JBQU0sRUFBRTtBQUFWO0FBQVoscUNBTEY7QUFVQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWI7QUFBbEMsU0FFRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRUYsc0JBQVksRUFBRTtBQUFoQjtBQUE1Qix1aUJBRkYsRUFZRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBRUEsc0JBQVksRUFBRTtBQUFoQjtBQUE1QixvQkFaRixFQWVFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRTtBQUFFQSxzQkFBWSxFQUFFO0FBQWhCO0FBQTVCLFNBQ0UsTUFBQyxvRUFBRDtBQUFlLG1CQUFXLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV3VCO0FBQXZDLFFBREYsQ0FmRixFQW1CR0osZ0JBbkJILEVBcUJFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCO0FBQTVCLFNBQ0U7QUFBUSxlQUFPLEVBQUUsS0FBS2pCO0FBQXRCLGtCQURGLENBckJGLENBREY7QUEyQkQ7Ozs7OE1BbEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQnFCLDBCQUEvQixRQUErQkEsVUFBL0IsRUFBMkNDLEdBQTNDLFFBQTJDQSxHQUEzQztBQUFBLGlEQUdTO0FBQ0xGLDZCQUFXLEVBQUVFLEdBQUcsQ0FBQ0YsV0FEWjtBQUVMRyx5QkFBTyxFQUFFRCxHQUFHLENBQUNDLE9BRlI7QUFHTHBCLDJCQUFTLEVBQUVtQixHQUFHLENBQUNuQixTQUhWO0FBSUxZLDZCQUFXLEVBQUVPLEdBQUcsQ0FBQ0U7QUFKWixpQkFIVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7OztFQVZtQkMsNENBQUssQ0FBQ0MsUzs7QUErRTNCLFNBQVNDLGVBQVQsQ0FBeUIxQixLQUF6QixFQUFnQztBQUM5QixTQUFPO0FBQ0wyQixRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0Q7O0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTyxFQUFQO0FBQ0QsQ0FGRDs7QUFHZUMsMkhBQU8sQ0FBQ0osZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNqQyxNQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMva3liL3JlZ2lzdHJ5LXByb21wdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVmFsaWRhdGVUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9WYWxpZGF0ZUtZQkNvbXBcIjtcblxuY2xhc3MgV2l6YXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hZGRVc2VyVG9SZWdpc3RyeSA9IHRoaXMuYWRkVXNlclRvUmVnaXN0cnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb2NlZWRUb0tleWNsb2FrID0gdGhpcy5wcm9jZWVkVG9LZXljbG9hay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZGRlZFRvUmVnaXN0cnk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVkdXhTdG9yZSwgcmVxIH0pIHtcbiAgICAvL3JldHVybmVkIHZhbHVlIGhlcmUgaXMgZ2V0dGluZyBtZXJlZCB3aXRoIHRoZSBtYXBzdGF0ZXRvcHJvcHNcbiAgICAvLyBtYXBzdGF0ZXRvcHJvcHMgb3ZlcnJpZGVzIHRoZXNlIHZhbHVlcyBpZiB0aGV5IG1hdGNoXG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJEZXRhaWxzOiByZXEudXNlckRldGFpbHMsXG4gICAgICBzZWxmTGVpOiByZXEuc2VsZkxlaSxcbiAgICAgIHNlc3Npb25JZDogcmVxLnNlc3Npb25JZCxcbiAgICAgIGtleWNsb2FrVXJsOiByZXEua2V5Y2xvYWtSZWRpcmVjdFVSSSxcbiAgICB9O1xuICB9XG5cbiAgYWRkVXNlclRvUmVnaXN0cnkoKSB7XG4gICAgbGV0IHNlc3Npb25JZCA9IHRoaXMucHJvcHMuc2Vzc2lvbklkO1xuICAgIGNvbnN0IHJlcU9iaiA9IHsgc2Vzc2lvbklkOiBzZXNzaW9uSWQgfTtcbiAgICBheGlvcy5wb3N0KFwiL3JlZ2lzdHJ5L2FkZFwiLCByZXFPYmopLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWRkZWRUb1JlZ2lzdHJ5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9UT0RPIGFkZCBoZXJlIHRoZSBzZW5kIGVtYWlsIGNhbGxiYWNrXG4gIH1cblxuICBwcm9jZWVkVG9LZXljbG9haygpIHtcbiAgICBjb25zb2xlLmxvZyhcInByb2NlZWQgdG8ga2V5Y2xvYWtcIik7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnByb3BzLmtleWNsb2FrVXJsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhZGRUb1JlZ2lzdHJ5RGl2ID0gIXRoaXMuc3RhdGUuYWRkZWRUb1JlZ2lzdHJ5ID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMyByZW1cIiB9fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFVzZXJUb1JlZ2lzdHJ5fT5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjMgcmVtIDMgcmVtIDMgcmVtIDMgcmVtXCIgfX0+XG4gICAgICAgIFRoYW5rIHlvdSBmb3IgcmVnaXN0ZXJpbmdcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiIH19PlxuICAgICAgICB7LyogPFZhbGlkYXRlVGFibGUgdXNlckRldGFpbHM9e3RoaXMucHJvcHMudXNlckRldGFpbHN9PjwvVmFsaWRhdGVUYWJsZT4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICBQbGVhc2UgcmV2aWV3IHRoZSBhdHRyaWJ1dGVzIHJldHJpZXZlZCwgcHJlc2VudGVkIGJlbG93LiBJZiB5b3UgYXJlXG4gICAgICAgICAgY2VydGFpbiB0aGF0IHRoZXNlIGF0dHJpYnV0ZXMgY29ycmVjdGx5IGlkZW50aWZ5IHlvdSBwbGVhc2UgY2xpY2sgdGhlXG4gICAgICAgICAgTmV4dCBidXR0b24uIEFkZGl0aW9uYWxseSwgaWYgeW91IHdvdWxkIGxpa2UgeW91IGNhbiAgYWRkIHlvdXIgQ29tcGFueeKAmXMgS1lCXG4gICAgICAgICAgcHJvZmlsZSBpbiB0aGUgcHVibGljIHJlZ2lzdHJ5IGluIGFuIGVhc2lseSBWZXJpZmlhYmxlIEZvcm1hdD8gSWYgeW91XG4gICAgICAgICAgb3B0IGluIGZvciB0aGlzIGZlYXR1cmUgdGhlIHB1YmxpYyBwcm9maWxlIG9mIHlvdXIgb3JnYW5pemF0aW9uIHdpbGxcbiAgICAgICAgICBiZSBlYXNpbHkgdmVyaWZpZWQgYnkgYW55b25lIChwdWJsaWMgYXV0aG9yaXRpZXMsIEIyQiB0cmFuc2FjdGlvbnNcbiAgICAgICAgICBldGMuKSBncmVhdGx5IGZhY2lsaXRhdGluZyB5b3VyIGRlYWxpbmdzIHdpdGggdGhlc2UgcGFydGllcy4gSWYgWWVzLFxuICAgICAgICAgIHBsZWFzZSBjbGljayB0aGUg4oCcUmVnaXN0ZXLigJ0gYnV0dG9uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIzcmVtXCIgfX0+XG4gICAgICAgICAgRGV0YWlsczpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICA8VmFsaWRhdGVUYWJsZSB1c2VyRGV0YWlscz17dGhpcy5wcm9wcy51c2VyRGV0YWlsc30+PC9WYWxpZGF0ZVRhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YWRkVG9SZWdpc3RyeURpdn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIzcmVtXCIgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWRUb0tleWNsb2FrfT5GaW5pc2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IFwiVGVzdFwiLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHt9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFdpemFyZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/kyb/registry-prompt.js\n");

/***/ })

})