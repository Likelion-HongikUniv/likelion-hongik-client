import React from "react";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { PageMove } from "../../components/communityPage/PageMove";

interface IPost {
  title: string;
  text: string;
}

export function MyReplyPage() {
  const posts = [
    { title: "게시글1", text: "본문1" },
    { title: "게시글2", text: "본문2" },
    { title: "게시글3", text: "본문3" },
    { title: "게시글4", text: "본문4" },
    { title: "게시글5", text: "본문5" },
  ];
  return (
    <>
      <Header />
      <Section>
        <MyPostPageContainer>
          <MyPageNav />
          <MyPostBoxContainer>
            <Title>내가 쓴 댓글</Title>
            <PostItemContainer>
              {posts.map((post: IPost, index: number) => (
                <PostItem key={index} title={post.title} text={post.text} />
              ))}
            </PostItemContainer>
            <PageMove />
          </MyPostBoxContainer>
        </MyPostPageContainer>
      </Section>
    </>
  );
}

const MyPostPageContainer = styled.div`
  display: flex;
  margin-bottom: 200px;
`;

const MyPostBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
  margin-left: 160px;
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
  height: 1330px;
`;
