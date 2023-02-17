import styled from "styled-components";
import { Header } from "../components/elements/Header";
import { CategoryTab } from "../components/communityPage/CategoryTab";
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
import { ITag } from "../interfaces/category";
import { SearchPostList } from "../components/communityPage/SearchPostList";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const isMobile = useMediaQuery("( max-width: 767px )");
  const tag = useRecoilValue<ITag>(nowTagState);
  const isModal = useRecoilValue<boolean>(selectModalState);

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
            <SearchPostList categoryName={categoryName} tag={tag} />
            <PageMove />
          </Container>
        </Wrapper>
        <Footer style={{ position: "absolute" }} />
      </Section>
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
    padding: 0 20px;
    gap: 30px;
    margin-top: 45px;
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
