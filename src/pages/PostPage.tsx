import { Column } from "../components/elements/Wrapper";
import { Header } from "../components/elements/Header";
import { Section } from "../components/elements/Wrapper";
import { Board } from "../components/postPage/Board";
import { CommentsList } from "../components/postPage/CommentsList";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { IComment, IBoard } from "../interfaces/comments";
import { commentsListState, boardState } from "../states/atoms";
import styled from "styled-components";
import axios from "axios";
import useMediaQuery from "../hooks/useMediaQuery";
import { getPostDetail } from "../api/getPostDetail";
import { useQuery } from "@tanstack/react-query";

export function PostPage() {
  const [board, setBoardData] = useState<IBoard>({
    postId: 1,
    author: {
      authorId: 1,
      nickname: "",
      profileImage: "",
      isAuthor: true,
    },
    title: "",
    body: "",
    createdTime: "",
    isLiked: true,
    likeCount: 0,
    comments: [],
    imageUrls: [],
  });
  const [comments, setCommentsData] = useState<IComment[]>([
    {
      commentId: 1,
      author: {
        authorId: 1,
        nickname: "",
        profileImage: "",
        isAuthor: true,
      },
      body: "",
      isDeleted: false,
      createdTime: "",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
  ]);
  const isPC = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width : 768px)");
  const { id } = useParams<{ id?: string }>();

  const postIdToNumber = Number(id);
  const { isLoading: isPostDataLoading, data: postData } = useQuery(["post-detail", postIdToNumber], () =>
    getPostDetail(postIdToNumber),
  );

  useEffect(() => {
    if (!isPostDataLoading && postData) {
      console.log(postData);

      setBoardData(postData);
      setCommentsData(postData.comments);
    }
  }, [isPostDataLoading]);
  // if (!isPostDataLoading && postData) {
  //   setBoardData(postData);
  //   setCommentsData(postData.comments);
  // }

  return (
    <>
      <Header />
      {isPC && !isPostDataLoading && (
        <Section style={{ padding: "0 340px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
      {isTablet && !isPostDataLoading && (
        <Section style={{ padding: "0 40px", display: "flex", justifyContent: "center" }}>
          <Column style={{ marginTop: "100px" }}>
            <Board {...board} />
            <Hairline />
            <CommentsList {...comments} />
          </Column>
        </Section>
      )}
      {isMobile && !isPostDataLoading && (
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
