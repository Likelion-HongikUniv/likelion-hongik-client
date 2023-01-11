import { Row, Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";

export function PostPage() {
  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        <Column>
          <Board />
          <CommentsList commentList={[]}></CommentsList>
        </Column>
      </Section>
    </>
  );
}
