import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";

export function PostPage() {
  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        <Column style={{ marginTop: "100px" }}>
          <Board key={0} id={0} title={"게시글 제목 테스트"} username={"사용자 이름"} created={"2023-01-13"} />
          <CommentsList commentList={[]}></CommentsList>
        </Column>
      </Section>
    </>
  );
}
