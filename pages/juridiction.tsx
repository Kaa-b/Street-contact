import Head from 'next/head';

import Navbar from 'components/nav/Navbar';
import Footer from 'components/footer/Footer';
import Article from 'components/article/Article';

import data from '../data/juridiction.json';

export default function Juridiction() {
  return (
    <>
      <Head>
        <title>Juridiction</title>
        <meta name="description" content="Page cadre juridique" />
      </Head>
      <Navbar />
      <main>
        {data.map((article) => {
          return (
            <Article 
              key={article.id}
              header={article.header}
              paragraphs={article.paragraphs}
            />
          );
        })}
        
      </main>
      <Footer/>
    </>
  );
}