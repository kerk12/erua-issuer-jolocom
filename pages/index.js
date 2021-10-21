import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import MessageBox from "../components/messageBox"

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Grids</title>
            </Head>
            <MessageBox message={'Use the following menu in order to either query for the Verifiable KYB Data of an organization or start your own Verifiable Business Wallet (Issue a KYB Verifiable Credential for your Company). A Verifiable Business Wallet implements a portable identity business profile for an organization. To learn more please click here'}/>
            <section className={utilStyles.headingMd}>
                <p>Login</p>
                <p>
                    <Link href="/login">
                        <a>Issue KYB</a>
                    </Link>
                </p>
            </section>
            <section className={utilStyles.headingMd}>
                <p>Search</p>
                <p>
                    <Link href="/query">
                        <a>Query existing KYBs</a>
                    </Link>
                </p>
            </section>
            <MessageBox message={'text 2'}/>
        </Layout>
    )
}