import React from "react";
import styled from "styled-components";
import { Header } from "../components/elements/Header";
import { CategoryTab } from "../components/communityPage/CategoryTab";
import { SearchBar } from "../components/communityPage/SearchBar";
import { PostList } from "../components/communityPage/PostList";
import { PageMove } from "../components/communityPage/PageMove";
import { useParams } from "react-router-dom";

export function CommunityPage() {
  const { categoryName } = useParams() as { categoryName: string };

  return (
    <div style={{ backgroundColor: "#000", width: "100vw" }}>
      <Header></Header>
      <Wrapper>
        <Container>
          <CommunityHeader>
            <CategoryTab categoryName={categoryName}></CategoryTab>
            <SearchBar></SearchBar>
          </CommunityHeader>
          <CommunityBody>
            <CommunityBodyTop>
              <div>
                <span style={{ color: "#ED7F30", fontSize: "4px" }}>•</span>
                <span>최신순</span>
              </div>
              <button>
                <img src="writeLogo.png" alt="write_logo" />
                <span>글쓰기</span>
              </button>
            </CommunityBodyTop>
            <PostList></PostList>
          </CommunityBody>
          <PageMove></PageMove>
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  /* font-family: "Inter"; */
  font-style: normal;
  padding-top: 140px;
  padding-bottom: 344px;
  width: 1240px;
  margin: 0 auto;
  background-color: #000;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  gap: 125px;
  color: #fff;
`;

const Container = styled.div`
  width: 925px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CommunityHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommunityBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommunityBodyTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  div {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 119px;
    height: 52px;
    background: #ed7f30;
    border-radius: 8px;
    img {
      width: 18px;
      height: 18px;
    }
    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.32px;
      color: #000000;
    }
  }
`;
