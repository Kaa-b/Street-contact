interface Paragraph {
    id: number,
    paragraphHeader: string,
    content: string
}

type Props = {
    header: string
    paragraphs: Array<Paragraph>
}

const Article = (props: Props) => {
  return (
    <div>
      <div>{props.header}</div>
      <div>
        {props.paragraphs.map((section) => {
          return (
            <div key={section.id}>
              <div>{section.paragraphHeader}</div>
              <div>{section.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;