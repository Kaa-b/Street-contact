import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

export default function Particulier() {
  return (
    <>
      <Head>
        <title>Particulier</title>
        <meta name="description" content="Page particulier" />
      </Head>
      <Navbar />
      <main>
        Page Particulier
      </main>
      <Footer/>
    </>
  );
}