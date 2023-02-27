import Head from 'next/head';
import Image from 'next/image'

import Navbar from 'components/nav/Navbar';

import styles from "../styles/Home.module.css";


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
        <div className={styles.banner}>
          <div className={styles.heroImage}>
            <Image
              src="/static/heroImg.svg"
              alt="Hero image girl fighting"
              width="600"
              height="650"
            />
          </div>
          <div className={styles.introContainer}>
            <header className={styles.introHeader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</header>
            <div className={styles.introWrapper}>
              <p className={styles.introDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <div className={styles.introButton}>SOME BUTTON</div>
            </div>


          </div>
        </div>
      </main>
    </div>
  )
}
