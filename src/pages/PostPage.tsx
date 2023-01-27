import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { IComment, IBoard } from "../interfaces/comments";
import { commentsListState, boardState } from "../states/atoms";
import GetPostDetail from "../api/getPostDetail";
import useMediaQuery from "../hooks/useMediaQuery";

export function PostPage() {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const matches = useMediaQuery("(min-width : 992px)");

  let postId: any = 17;
  const [idParams, setIdParams] = useSearchParams();
  if (idParams.get("id") !== null) {
    postId = idParams.get("id");
  }

  GetPostDetail(postId);

  return (
    <>
      <Header />
      {matches ? (
        <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      ) : (
        <Section style={{ padding: "0 20px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
    </>
  );
}
