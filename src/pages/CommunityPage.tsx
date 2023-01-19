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
import post from "../data/post.json";
import Footer from "../components/elements/Footer";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };
  const postsData = post.data;

  return (
    <>
      <Header />
      <Section>
        <Wrapper>
          <SideBar categoryName={categoryName} />
          <Container>
            {categoryName === "project" ? <ProjectInfo /> : ""}
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
`;

const Container = styled.div`
  width: 48.1771vw;
  margin-left: 34.1146vw;
`;
