import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Entreprise() {
    return (
        <>
            <Head>
                <title>Entreprises</title>
                <meta name="description" content="Page entreprises" />
            </Head>
            <Navbar />
            <div>
                Page Entreprises
            </div>
        </>
    )
}