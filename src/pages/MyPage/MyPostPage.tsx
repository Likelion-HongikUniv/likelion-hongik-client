import React, { useEffect, useState } from "react";
import { Header } from "../../components/elements/Header";
import { PostItem } from "../../components/myPage/myPostPage/PostItem";
import { Section } from "../../components/elements/Wrapper";
import { MyPageNav } from "../../components/elements/MyPageNav";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MyPageMobileNav } from "../../components/myPage/NavBar/MyPageMobileNav";
import MyPagination from "../MyPage/MyPagination";
import { useRecoilValue, useRecoilState } from "recoil";
import * as S from "../../styles/myPages/myPageStyle";
import { currPageState, userState } from "../../states/index";
import { useNavigate } from 'react-router-dom';

interface IPost {
  title: string;
  author: string;
  profileImg?: string;
  body: string;
  time: string;
  likes: number;
  reply: number;
  postId: number;
}

export function MyPostPage() {
  const isMobile = useMediaQuery("( max-width: 768px )");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const [postList, setPostList] = useState([]);
  const [currPage] = useRecoilState(currPageState);
  const [totalPages, setTotalPages] = useState(5);
  const userInfo = useRecoilValue(userState);
  const profileImg = userInfo.profileImageSrc;
  // const token = userInfo.accessToken;
  const token = localStorage.getItem('token');
  const baseURL = "https://www.hongiklikelion.click";
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    getMyPostAPI();
  }, [currPage]);

  const getMyPostAPI = async () => {
    await axios
      .get(`${baseURL}/mypage/posts/`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
        params: {
          size: 5,
          page: currPage,
        },
      })
      .then((response) => {
        setPostList(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch(function (error) {
        console.log(error);
        alert('로그인이 필요한 기능입니다.');
        navigate('/login');
      });
  };

  return (
    <>
      <Header />
      <Section>
        <S.MyPostPageContainer>
          {isTablet ? <MyPageMobileNav /> : <MyPageNav />}
          <S.MyPostBoxContainer>
            {isMobile ? "" : <S.Title>내가 쓴 글</S.Title>}
            <S.PostItemContainer>
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
                  profileImg={profileImg}
                />
              ))}
            </S.PostItemContainer>
            <MyPagination totalPages={totalPages} />
          </S.MyPostBoxContainer>
        </S.MyPostPageContainer>
      </Section>
    </>
  );
}
