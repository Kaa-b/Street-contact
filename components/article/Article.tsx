import styles from './article.module.css';

interface Paragraph {
  id: number,
  paragraphHeader: string,
  content: string
}

type Props = {
  id: number
  header: string
  paragraphs: Array<Paragraph>
}

const Article = (props: Props) => {
  return (
    <>
      <h1 className={styles.header} id={props.id.toString()}>{props.header}</h1>
      {props.paragraphs.map((section) => {
        return (
          <div key={section.id.toString()} className={styles.sectionWrapper} id={section.id.toString()}>
            <h3 className={styles.paragraphHeader}>{section.paragraphHeader}</h3>
            <p className={styles.content}>{section.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default Article;