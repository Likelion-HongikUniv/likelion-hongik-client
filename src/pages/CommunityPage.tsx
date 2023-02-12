import { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/elements/Header";
import { CategoryTab } from "../components/communityPage/CategoryTab";
import { PostList } from "../components/communityPage/PostList";
import { PageMove } from "../components/communityPage/PageMove";
import { useParams } from "react-router-dom";
import { Section } from "../components/elements/Wrapper";
import { SideBar } from "../components/communityPage/SideBar";
import { TopBoard } from "../components/communityPage/TopBoard";
import { ProjectInfo } from "../components/communityPage/ProjectInfo";
import Footer from "../components/elements/Footer";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { nowTagState, postsListState, pageState, paginationState, selectModalState } from "../states/atoms";
import { IPost, IPagination } from "../interfaces/post";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import { ITag } from "../interfaces/category";

const baseURL = "http://13.125.72.138:8080";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const isMobile = useMediaQuery("( max-width: 767px )");
  const tag = useRecoilValue<ITag>(nowTagState);
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsListState);
  const page = useRecoilValue<number>(pageState);
  const setPagination = useSetRecoilState<IPagination>(paginationState);
  const isModal = useRecoilValue<boolean>(selectModalState);

  function GetPostList(category: string, tag: string, page: number) {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseURL}/community/posts/${category}/${tag}/?page=${page}`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setPagination({
            totalPage: response.data.totalPage,
            totalElements: response.data.totalElements,
            pagingSize: response.data.pagingSize,
            currentPage: response.data.currentPage,
            isEmpty: response.data.isEmpty,
            isFirst: response.data.isFirst,
            isLast: response.data.isLast,
          });
          setPostsData(response.data.data);
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
    GetPostList(categoryName, tag.key, page);
  }, [categoryName, tag, page]);

  return (
    <>
      <Header />
      <Section style={isModal ? { height: "95vh", overflowY: "hidden", margin: "0" } : {}}>
        <Wrapper>
          {categoryName === "PROJECT" && isMobile && <ProjectInfo />}
          <SideBar categoryName={categoryName} />
          <Container>
            {categoryName === "PROJECT" && !isMobile && <ProjectInfo />}
            <CategoryTab categoryName={categoryName} />
            <TopBoard categoryName={categoryName} />
            <PostList {...postsData} />
            <PageMove />
          </Container>
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 140px;
  gap: 125px;
  @media all and (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
    padding: 0 5.1282vw;
    gap: 6.1538vw;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 60px;
    padding: 0 40px;
    gap: 40px;
  }
`;

const Container = styled.div`
  width: 48.1771vw;
  @media all and (max-width: 1023px) {
    width: 100%;
  }
`;
