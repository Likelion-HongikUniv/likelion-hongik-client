import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { IComment, IBoard } from "../interfaces/comments";
import { commentsListState, boardState } from "../states/atoms";
import styled from "styled-components";
import axios from "axios";
import useMediaQuery from "../hooks/useMediaQuery";

const baseURL = "http://13.125.72.138:8080";

export function PostPage() {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const isPC = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width : 768px)");
  const { id } = useParams<{ id?: string }>();
  function GetPostDetail(postId: number) {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseURL}/community/post/${postId}`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setBoardData(response.data);
          setCommentsData(response.data.comments);
          return response.data;
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 500) {
          alert("오류코드 401, 접근 권한이 없습니다. 로그인이 필요합니다.");
        }
        if (err.response.status === 404) {
          alert("게시글을 찾을 수 없습니다.");
        }
        window.location.href = "/";
        throw err;
      });
  }

  useEffect(() => {
    const postIdToNumber = Number(id);
    postIdToNumber && GetPostDetail(postIdToNumber);
  }, []);

  return (
    <>
      <Header />
      {isPC && (
        <Section style={{ padding: "0 340px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
      {isTablet && (
        <Section style={{ padding: "0 40px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <Hairline />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
      {isMobile && (
        <Section style={{ position: "relative", padding: "0 20px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <Hairline />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
    </>
  );
}

const Hairline = styled.div`
  margin-top: 108px;
  margin-bottom: 20px;
  border: 1px solid rgb(255, 255, 255, 0.3);
`;
