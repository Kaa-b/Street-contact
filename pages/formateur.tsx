import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Formateur() {
    return (
        <>
            <Head>
                <title>Formateur</title>
                <meta name="description" content="Page Formateur" />
            </Head>
            <Navbar />
            <div>
                Page Formateur
            </div>
        </>
    )
}