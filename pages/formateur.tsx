import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

export default function Formateur() {
  return (
    <>
      <Head>
        <title>Formateur</title>
        <meta name="description" content="Page Formateur" />
      </Head>
      <Navbar />
      <main>
        Page Formateur
      </main>
      <Footer/>
    </>
  );
}