import React, { useEffect } from "react";
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

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };

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
            <PostList></PostList>
            <PageMove></PageMove>
          </Container>
        </Wrapper>
      </Section>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 125px;
`;

const Container = styled.div`
  width: 925px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
