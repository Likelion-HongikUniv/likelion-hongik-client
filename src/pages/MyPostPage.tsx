import React from "react";
import styled from "styled-components";
import { Header } from "../components/elements/Header";
import { PostItem } from "../components/myPostPage/PostItem";

export function MyPostPage() {
  const posts = [
    { title: "게시글1", text: "본문1" },
    { title: "게시글2", text: "본문2" },
    { title: "게시글3", text: "본문3" },
    { title: "게시글4", text: "본문4" },
    { title: "게시글5", text: "본문5" },
  ];
  return (
    <MyPostPageContainer>
      <Header />
      {/* 사이드바 들어갈 자리 */}
      <MyPostBoxContainer>
        <Title>내가 쓴 글</Title>
        <PostItemContainer>
          {posts.map((post, index) => (
            <PostItem key={index} />
          ))}
        </PostItemContainer>
      </MyPostBoxContainer>
    </MyPostPageContainer>
  );
}

const MyPostPageContainer = styled.div`
  width: 100vw;
`;

const MyPostBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  color: #ffffff;
  opacity: 0.98;
  width: 925px;
`;

const PostItemContainer = styled.div`
  width: 925px;
  height: 257px;
`;
