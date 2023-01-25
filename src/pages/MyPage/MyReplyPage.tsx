import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { PageMove } from "../../components/communityPage/PageMove";
import axios from "axios";

interface IPost {
  title: string;
  author: string;
  profileImage?: string;
  body: string;
  time: string;
  likes: number;
  reply: number;
}

export function MyReplyPage() {
  const [postList, setPostList] = useState([]);
  const token = localStorage.getItem("token");
  const getMyReplyAPI = async () => {
    await axios
      .get(`http://13.124.126.164:8080/mypage/post/`, {
        //comment로 바꾸기
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
        params: {
          size: 5,
          page: 1,
        },
      })
      .then((response) => {
        console.log(response);
        setPostList(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMyReplyAPI();
  }, [postList]);

  return (
    <>
      <Header />
      <Section>
        <MyPostPageContainer>
          <MyPageNav />
          <MyPostBoxContainer>
            <Title>내가 쓴 댓글</Title>
            <PostItemContainer>
              {postList.map((post: IPost, index: number) => (
                <PostItem
                  key={index}
                  author={post.author}
                  title={post.title}
                  body={post.body}
                  likes={post.likes}
                  reply={post.reply}
                  time={post.time}
                  profileImage={post.profileImage}
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
