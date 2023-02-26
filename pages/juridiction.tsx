import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Juridiction() {
    return (
        <>
            <Head>
                <title>Juridiction</title>
                <meta name="description" content="Page cadre juridique" />
            </Head>
            <Navbar />
            <div>
                Page cadre juridique
            </div>
        </>
    )
}