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
import { getPostDetail } from "../api/getPostDetail";
import { useQuery } from "@tanstack/react-query";

const baseURL = "http://13.125.72.138:8080";

export function PostPage() {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const isPC = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width : 768px)");
  const { id } = useParams<{ id?: string }>();
  const postIdToNumber = Number(id);
  const { isLoading: isPostDataLoading, data: postData } = useQuery(
    ["post-detail", postIdToNumber],
    async () => await getPostDetail(postIdToNumber),
  );
  if (!isPostDataLoading) {
    setBoardData(postData);
    setCommentsData(postData.comments);
  }

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
