import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useParams } from "react-router-dom";

interface i {
  postId: number;
}
export function PostPage() {
  const { postId } = useParams();
  if (postId) {
    console.log(postId);
  }
  // console.log(postId ? postId : "");

  return (
    <>
      <Header />
      <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
        {postId}
        <Column style={{ marginTop: "100px" }}>
          <Board
            // id={postId}
            author={[]}
            title={"게시글 제목 테스트"}
            body={"사용자 이름"}
            date={"2023-01-13"}
            likeCount={23}
          />
          <CommentsList commentList={[]}></CommentsList>
        </Column>
      </Section>
    </>
  );
}
