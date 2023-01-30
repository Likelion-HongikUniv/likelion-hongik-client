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
import axios from "axios";

export function PostPage() {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const isPC = useMediaQuery("(min-width : 992px)");
  const accessToken = localStorage.getItem("token");
  // const [idParams, setIdParams] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("id");

  GetPostDetail(12);
  useEffect(() => {
    console.log(postId);

    const postIdToNumber = Number(postId);
    postIdToNumber && console.log(postIdToNumber);

    // postIdToNumber && GetPostDetail(postIdToNumber);
  }, [postId]);

  let body = {
    post_id: "1",
    authorId: "3",
    body: "코딩은 너무 어려워요 ",
  };

  useEffect(() => {
    axios
      .post(
        "http://13.124.126.164:8080/community/post/12",
        JSON.stringify(body),
        // { withCredentials: true },
        {
          headers: {
            "Content-Type": `application/json`,
            JWT: `${accessToken}`,
          },
        },
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <>
      <Header />
      {isPC ? (
        <Section style={{ padding: "0 340px 0 340px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      ) : (
        <Section style={{ padding: "0 20px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }} gap={"108px"}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
    </>
  );
}
