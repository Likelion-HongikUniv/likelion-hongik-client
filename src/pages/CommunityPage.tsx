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
import GetPostList from "../api/getPostList";
import useMediaQuery from "../hooks/useMediaQuery";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const isMobile = useMediaQuery("( max-width: 768px )");
  const tag = useRecoilValue<string>(nowTagState);
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsListState);
  const page = useRecoilValue<number>(pageState);
  const setPagination = useSetRecoilState<IPagination>(paginationState);

  useEffect(() => {
    GetPostList({ category: categoryName, tag, page }).then(function (response) {
      if (response) {
        setPagination({
          totalPage: response.totalPage,
          totalElements: response.totalElements,
          pagingSize: response.pagingSize,
          currentPage: response.currentPage,
          isEmpty: response.isEmpty,
          isFirst: response.isFirst,
          isLast: response.isLast,
        });
        setPostsData(response.data);
      }
    });
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
