import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contacter mon formateur" />
      </Head>
      <Navbar />
      <main>
                Page Contact
      </main>
      <Footer/>
    </>
  );
}