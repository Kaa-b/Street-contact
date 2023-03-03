import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

export default function Juridiction() {
    return (
        <>
            <Head>
                <title>Juridiction</title>
                <meta name="description" content="Page cadre juridique" />
            </Head>
            <Navbar />
            <main>
                Page cadre juridique
            </main>
            <Footer/>
        </>
    )
}