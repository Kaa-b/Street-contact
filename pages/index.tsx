import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';

import styles from '../styles/Home.module.css';

import { header, data, trainer } from '../data/home.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Street contact</title>
        <meta name="description" content="Take self defence classes with a renowned instructor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.heroImage}>
            <Image
              src="/static/heroImg.jpg"
              alt="Hero image girl fighting"
              width={500}
              height={650}
            />
          </div>
          <div className={styles.introContainer}>
            <header className={styles.introHeader}>{header.title}</header>
            <div className={styles.introWrapper}>
              <p className={styles.introDescription}>{header.content}</p>
              <div className={styles.introButtonContainer}>
                <button className={styles.introButton}>SOME BUTTON</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.data}>
          <div className={styles.dataDescription}>{data.content}</div>
          <div className={styles.dataFightingIcon}>
            <div className={styles.dataSecondIcon}>
              <Image
                src="/static/fightingFigure2.svg"
                alt="Fighting icon 2"
                width={297}
                height={233} />
            </div>
          </div>
        </section>
        <section className={styles.trainer}>
          <div className={styles.trainerPicture}>
            <Image
              src="/static/avatarTrainer.svg"
              alt="Profile picture of the trainer"
              width={287}
              height={287} />
          </div>
          <div className={styles.trainerPresentation}>
            <header className={styles.trainerPresentationHeader}>{trainer.title}</header>
            <p className={styles.trainerPresentationDescription}>{trainer.content}</p>
          </div>
        </section>
        <section className={styles.links}>
          <div className={styles.linksButtonWrapper}>
            <Link className={styles.linksParticulier} href="/particulier"></Link>
          </div>
          <div className={styles.linksButtonWrapper}>
            <Link className={styles.linksEntreprise} href="/entreprise"></Link>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
