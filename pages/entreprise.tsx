import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Entreprise() {
    return (
        <>
            <Head>
                <title>Entreprise</title>
                <meta name="description" content="Page entreprise" />
            </Head>
            <Navbar />
            <div>
                Page Entreprise
            </div>
        </>
    )
}