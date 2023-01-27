import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { PageMove } from "../../components/communityPage/PageMove";
import axios from "axios";

interface IPost {
  postid: number;
  author: string;
  title: string;
  body: string;
  createdTime: string;
  like: number;
  reply: number;
}

export function MyPostPage() {
  // const accessToken =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE2NzQ0MDc0NzAsImV4cCI6MTY3NDQxMTA3MCwiZW1haWwiOiJkbHdsYWxzMTI4OUBnbWFpbC5jb20iLCJyb2xlIjoiR1VFU1QifQ._FXTDLDsCCe5mK0v1YzFfbVMufgGvWg3bOzmRzwuH_s";
  // const getMyPostAPI = () => {
  //   axios.get("http://13.124.126.164:8080/mypage/posts/", {
  //     headers: {
  //       "Content-Type": `application/json`,
  //       JWT: `${accessToken}`,
  //     },
  //     params: {
  //       size: 15,
  //       page: 10,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   getMyPostAPI();
  // }, []);

  const posts = [
    {
      postid: 1,
      author: "나",
      title: "게시글1",
      body: "본문1",
      like: 1,
      reply: 5,
      createdTime: "Sun Jan 15 23:24:46 KST 2023",
    },
    {
      postid: 2,
      author: "나",
      title: "게시글2",
      body: "본문2",
      like: 2,
      reply: 4,
      createdTime: "Sun Jan 15 23:24:46 KST 2023",
    },
    {
      postid: 3,
      author: "나",
      title: "게시글3",
      body: "본문3",
      like: 3,
      reply: 3,
      createdTime: "Sun Jan 15 23:24:46 KST 2023",
    },
    {
      postid: 4,
      author: "나",
      title: "게시글4",
      body: "본문4",
      like: 4,
      reply: 2,
      createdTime: "Sun Jan 15 23:24:46 KST 2023",
    },
    {
      postid: 5,
      author: "나",
      title: "게시글5",
      body: "본문5",
      like: 5,
      reply: 1,
      createdTime: "Sun Jan 15 23:24:46 KST 2023",
    },
  ];
  return (
    <>
      <Header />
      <Section>
        <MyPostPageContainer>
          <MyPageNav />
          <MyPostBoxContainer>
            <Title>내가 쓴 글</Title>
            <PostItemContainer>
              {posts.map((post: IPost) => (
                <PostItem
                  key={post.postid}
                  postid={post.postid}
                  author={post.author}
                  title={post.title}
                  body={post.body}
                  like={post.like}
                  reply={post.reply}
                  createdTime={post.createdTime}
                />
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
