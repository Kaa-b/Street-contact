import Head from 'next/head';

import Navbar from 'components/nav/Navbar';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contacter mon formateur" />
            </Head>
            <Navbar />
            <div>
                Page Contact
            </div>
        </>
    )
}