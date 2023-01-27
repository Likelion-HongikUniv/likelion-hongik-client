import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { PageMove } from "../../components/communityPage/PageMove";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { MyPageMobileNav } from "../../components/elements/MyPageMobileNav";

interface IPost {
  title: string;
  author: string;
  profileImage?: string;
  body: string;
  time: string;
  likes: number;
  reply: number;
  postId: number;
}

export function MyReplyPage() {
  const isMobile = useMediaQuery({ maxWidth: 390 });
  const [postList, setPostList] = useState([]);
  const token = localStorage.getItem("token");
  const getMyReplyAPI = async () => {
    await axios
      .get(`http://13.124.126.164:8080/mypage/comments/`, {
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
        console.log(response.data);
        setPostList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMyReplyAPI();
  }, []);

  return (
    <>
      <Header />
      <Section>
        <MyPostPageContainer>
          {isMobile ? <MyPageMobileNav /> : <MyPageNav />}
          <MyPostBoxContainer>
            {isMobile ? "" : <Title>내가 쓴 댓글</Title>}
            <PostItemContainer>
              {postList.map((post: IPost, index: number) => (
                <PostItem
                  key={index}
                  postId={post.postId}
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
  justify-content: center;
  margin-bottom: 200px;
  @media (max-width: 390px) {
    width: 100vw;
    flex-direction: column;
    overflow: hidden;
  }
`;

const MyPostBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
  margin-left: 8.33vw;
  @media (max-width: 390px) {
    width: 100vw;
    margin-top: 0px;
    margin-left: 0px;
  }
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
  width: 800px;
  height: 1330px;
  @media (max-width: 390px) {
    margin-bottom: 50px;
  }
`;