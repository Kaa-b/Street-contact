import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';
import Article from 'components/article/Article';

import styles from '../styles/juridiction.module.css';

import data from '../data/juridiction.json';

export default function Juridiction() {

  function scrollTo(id: number) {
    let e = document.getElementById(`${id}`);
  
    if (e) {
      e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Juridiction</title>
        <meta name="description" content="Page cadre juridique" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          {data.map((title) => {
            return (
              <div key={title.id.toString()}>
                <button className={styles.title} onClick={() => {scrollTo(title.id)}}>{title.header}</button>
                {title.paragraphs.map((section) => {
                  return (
                    <button 
                      key={section.id.toString()} 
                      id={section.id.toString()} 
                      className={styles.subtitle} 
                      onClick={() => {scrollTo(title.id)}}
                    >
                      {section.paragraphHeader}
                    </button>
                  );
                })};
              </div>
            );
          })}
        </aside>
        <section className={styles.body}>
          {data.map((article) => {
            return (
              <Article 
                key={article.id.toString()}
                id={article.id}
                header={article.header}
                paragraphs={article.paragraphs}
              />
            );
          })}
        </section>
      </main>
      <Footer/>
    </div>
  );
};