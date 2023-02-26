import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Particulier() {
    return (
        <>
            <Head>
                <title>Particulier</title>
                <meta name="description" content="Page particulier" />
            </Head>
            <Navbar />
            <div>
                Page Particulier
            </div>
        </>
    )
}