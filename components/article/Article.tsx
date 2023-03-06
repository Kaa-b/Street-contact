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
      <div id={props.id.toString()}>{props.header}</div>
      {props.paragraphs.map((section) => {
        return (
          <div key={section.id.toString()} id={section.id.toString()}>
            <div>{section.paragraphHeader}</div>
            <div>{section.content}</div>
          </div>
        );
      })}
    </>
  );
};

export default Article;