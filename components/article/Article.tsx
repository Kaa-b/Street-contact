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
      <div className={styles.header} id={props.id.toString()}>{props.header}</div>
      {props.paragraphs.map((section) => {
        return (
          <div key={section.id.toString()} className={styles.sectionWrapper} id={section.id.toString()}>
            <div className={styles.paragraphHeader}>{section.paragraphHeader}</div>
            <div className={styles.content}>{section.content}</div>
          </div>
        );
      })}
    </>
  );
};

export default Article;