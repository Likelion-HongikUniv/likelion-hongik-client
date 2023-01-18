import React from "react";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { PageMove } from "../../components/communityPage/PageMove";



export function MyLikePage() {
 
  return (
    <>
      <Header />
      <Section>
        <MyPostPageContainer>
          <MyPageNav />
          <MyPostBoxContainer>
            <Title>좋아요 누른 글</Title>
            <PostItemContainer>
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
