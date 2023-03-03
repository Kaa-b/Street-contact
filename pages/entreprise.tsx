import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

export default function Entreprise() {
    return (
        <>
            <Head>
                <title>Entreprises</title>
                <meta name="description" content="Page entreprises" />
            </Head>
            <Navbar />
            <main>
                Page Entreprises
            </main>
            <Footer/>
        </>
    )
}