import { useEffect, useState } from "react";
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
import { useRecoilValue } from "recoil";
import { nowTagState, postsListState, pageState } from "../states/atoms";
import { IPost } from "../interfaces/post";
import getPostList from "../api/getPostList";
import post from "../data/post.json";
import useMediaQuery from "../hooks/useMediaQuery";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const isMobile = useMediaQuery("( max-width: 390px )");
  const tag = useRecoilValue<string>(nowTagState);
  // const postsData = useRecoilValue<IPost[]>(postsListState);
  const postsData = post.data;
  const page = useRecoilValue<number>(pageState);

  useEffect(() => {
    // getPostList({ category: categoryName, tag, page });
  }, []);

  return (
    <>
      <Header />
      <Section>
        <Wrapper>
          {categoryName === "project" && isMobile && <ProjectInfo />}
          <SideBar categoryName={categoryName} />
          <Container>
            {categoryName === "project" && !isMobile && <ProjectInfo />}
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
  gap: 125px;
  @media (max-width: 390px) {
    flex-direction: column;
    width: 100vw;
    padding: 0 20px;
    gap: 24px;
  }
`;

const Container = styled.div`
  width: 48.1771vw;
  margin-left: 34.1146vw;
  @media (max-width: 390px) {
    margin-left: 0;
    width: 100%;
  }
`;
