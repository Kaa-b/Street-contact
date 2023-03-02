import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
            <header className={styles.introHeader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</header>
            <div className={styles.introWrapper}>
              <p className={styles.introDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <div className={styles.introButtonContainer}>
                <button className={styles.introButton}>SOME BUTTON</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.data}>
          <div className={styles.dataDescription}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellu

          </div>
          <div className={styles.dataFightingIcon}>
            <div className={styles.dataSecondIcon}>
              <Image
                src="/static/fightingFigure2.svg"
                alt="Fighting icon 2"
                width={297}
                height={233} />
            </div>
            <div className={styles.dataFirstIcon}>
              <Image
                src="/static/fightingFigure1.svg"
                alt="Fighting icon 1"
                width={319}
                height={284} />
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
            <header className={styles.trainerPresentationHeader}>Découvrez votre formateur</header>
            <p className={styles.trainerPresentationDescription}>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.

              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
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
    </div>
  )
}
