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
import { nowTagState, postsListState, pageState, paginationState } from "../states/atoms";
import { IPost, IPagination } from "../interfaces/post";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";

const baseURL = "http://13.125.72.138:8080";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const isMobile = useMediaQuery("( max-width: 768px )");
  const tag = useRecoilValue<string>(nowTagState);
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsListState);
  const page = useRecoilValue<number>(pageState);
  const setPagination = useSetRecoilState<IPagination>(paginationState);

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
    GetPostList(categoryName, tag, page);
  }, [categoryName, tag, page]);
  return (
    <>
      <Header />
      <Section>
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
  justify-content: flex-start;
  width: 100vw;
  gap: 6.5104vw;
  @media all and (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    padding: 0 5.1282vw;
    gap: 6.1538vw;
  }
`;

const Container = styled.div`
  width: 48.1771vw;
  margin-left: 34.1146vw;
  @media all and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
