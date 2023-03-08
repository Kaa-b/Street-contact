import Head from 'next/head';
import Image from 'next/image';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

import styles from '../styles/formateur.module.css';

export default function Formateur() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formateur</title>
        <meta name="description" content="Page Formateur" />
      </Head>
      <Navbar />
      <main>
        <section className={styles.header}>
          <div className={styles.headerPicture}>
              <Image
                src="/static/heroImg.jpg"
                alt="Hero image girl fighting"
                width={400}
                height={550}
              />
          </div>
          <div className={styles.headerPresentation}>
            <p>Présentation un peu plus détaillée de Amar</p>
          </div>
        </section>
        <section className={styles.links}> 
          <div className={styles.linkContent}></div>
          <div className={styles.linkPictures}></div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}