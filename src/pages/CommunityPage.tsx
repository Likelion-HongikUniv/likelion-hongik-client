import React from "react";
import styled from "styled-components";
import { Header } from "../components/elements/Header";

const Wrapper = styled.div`
  font-family: "Inter";
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

const Nav = styled.div`
  width: 190px;
  height: 587px;
`;

const NavHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    height: 100%;
    line-height: 68px;
    font-size: 38px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: #ffffff;
`;

const Dept = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #b9b9b9;
`;

const Category = styled.div`
  padding: 20px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.32px;
  color: #979797;
  border-bottom: 1px solid #6d6d6d;
`;

const CategoryWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 16px;
  padding-left: 11px;
  padding-top: 20px;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.32px;
    color: #ffffff;
  }
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

const HeaderCategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const HeaderCategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 20px;
`;

const SearchBar = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  input {
    width: 783px;
    height: 60px;
    background: rgba(51, 51, 51, 0.6);
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 19px 16px;
    font-weight: 500;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 126px;
    height: 60px;
    background: #e9e9e9;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.32px;
    color: #000000;
    border: none;
  }
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

const CommunityPostList = styled.div`
  width: 100%;
`;

const CommunityPostItem = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
  }
`;

const CommunityPostLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
`;

const Content = styled.div`
  padding-left: 42px;
  width: 691px;
  margin-bottom: 20px;
  p {
    display: inline-block;
    white-space: nowrap;
    width: 691px;
    height: 46px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.32px;
    color: #ffffff;
    opacity: 0.98;
    margin: 0;
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 691px;
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.98;
  margin-bottom: 12px;
`;

const Bottom = styled.div`
  padding-left: 42px;
  display: flex;
  gap: 15px;
  flex-direction: row;
`;

const Icon = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
  img {
    width: 18px;
    height: 18px;
  }
`;

const CommunityFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 92px;
    height: 33px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  button {
    width: 33px;
    height: 33px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
  }
`;

export function CommunityPage() {
  const activeStyle = {
    borderBottom: "2px solid #FFFFFF",
  };
  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };
  return (
    <div style={{ backgroundColor: "#000", width: "100vw" }}>
      <Wrapper>
        {/* <Nav>
          <NavHeader>
            <Circle>
              <span>🦁</span>
            </Circle>
            <Profile>
              <Name>김아현</Name>
              <Dept>컴퓨터공학과</Dept>
            </Profile>
          </NavHeader>
          <Category>
            <span>게시판</span>
            <CategoryWrapper>
              <span>공지사항</span>
              <span style={{ fontWeight: "700", color: "#ED7F30" }}>Q&A</span>
              <span>자유게시판</span>
            </CategoryWrapper>
          </Category>
          <Category>
            <span>과제관리</span>
            <CategoryWrapper>
              <span>프론트</span>
              <span>백엔드</span>
              <span>기획&디자인</span>
            </CategoryWrapper>
          </Category>
          <Category>
            <span>프로젝트</span>
            <CategoryWrapper>
              <span>프론트</span>
              <span>백엔드</span>
              <span>기획&디자인</span>
              <span>프로젝트 회의</span>
            </CategoryWrapper>
          </Category>
        </Nav> */}
        <Container>
          <CommunityHeader>
            <HeaderCategoryList>
              <HeaderCategoryItem>공지사항</HeaderCategoryItem>
              <HeaderCategoryItem style={activeStyle}>Q&A</HeaderCategoryItem>
              <HeaderCategoryItem>자유게시판</HeaderCategoryItem>
            </HeaderCategoryList>
            <SearchBar>
              <input type="text" placeholder="검색어를 입력하세요"></input>
              <button type="submit">검색</button>
            </SearchBar>
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
            <CommunityPostList>
              <CommunityPostItem>
                <CommunityPostLeft>
                  <User>
                    <img src="logo192.png" />
                    <div>
                      <UserName>Ahyun Kim</UserName>
                      <UploadDate>2022.11.30</UploadDate>
                    </div>
                  </User>
                  <Content>
                    <Title>
                      야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글
                      제목 야옹맨의 게시글 제목 야옹맨의 게시글 제목
                    </Title>
                    <p>
                      안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다!
                      <br />
                      백준코딩만 하다가 대가리 깨질것같아서욧!! 개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~
                    </p>
                  </Content>
                  <Bottom>
                    <Icon>
                      <img src="likedLogo.png" alt="liked_logo" />
                      <span>200</span>
                    </Icon>
                    <Icon>
                      <img src="commentLogo.png" alt="comment_logo" />
                      <span>200</span>
                    </Icon>
                  </Bottom>
                </CommunityPostLeft>
                <img src="logo192.png" />
              </CommunityPostItem>
              <CommunityPostItem>
                <CommunityPostLeft>
                  <User>
                    <img src="logo192.png" />
                    <div>
                      <UserName>Ahyun Kim</UserName>
                      <UploadDate>2022.11.30</UploadDate>
                    </div>
                  </User>
                  <Content>
                    <Title>
                      야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글
                      제목 야옹맨의 게시글 제목 야옹맨의 게시글 제목
                    </Title>
                    <p>
                      안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다!
                      <br />
                      백준코딩만 하다가 대가리 깨질것같아서욧!! 개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~
                    </p>
                  </Content>
                  <Bottom>
                    <Icon>
                      <img src="likedLogo.png" alt="liked_logo" />
                      <span>200</span>
                    </Icon>
                    <Icon>
                      <img src="commentLogo.png" alt="comment_logo" />
                      <span>200</span>
                    </Icon>
                  </Bottom>
                </CommunityPostLeft>
                <img src="logo192.png" />
              </CommunityPostItem>
              <CommunityPostItem>
                <CommunityPostLeft>
                  <User>
                    <img src="logo192.png" />
                    <div>
                      <UserName>Ahyun Kim</UserName>
                      <UploadDate>2022.11.30</UploadDate>
                    </div>
                  </User>
                  <Content>
                    <Title>
                      야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글 제목야옹맨의 게시글
                      제목 야옹맨의 게시글 제목 야옹맨의 게시글 제목
                    </Title>
                    <p>
                      안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다!
                      <br />
                      백준코딩만 하다가 대가리 깨질것같아서욧!! 개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~
                    </p>
                  </Content>
                  <Bottom>
                    <Icon>
                      <img src="likedLogo.png" alt="liked_logo" />
                      <span>200</span>
                    </Icon>
                    <Icon>
                      <img src="commentLogo.png" alt="comment_logo" />
                      <span>200</span>
                    </Icon>
                  </Bottom>
                </CommunityPostLeft>
                <img src="logo192.png" />
              </CommunityPostItem>
            </CommunityPostList>
          </CommunityBody>
          <CommunityFooter>
            <button>이전 페이지</button>
            <Pagination>
              <button type="button" style={activeButton}>
                1
              </button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">...</button>
            </Pagination>
            <button>다음 페이지</button>
          </CommunityFooter>
        </Container>
      </Wrapper>
    </div>
  );
}
