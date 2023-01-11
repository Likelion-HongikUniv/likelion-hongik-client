import React from "react";
import styled from "styled-components";

export function SideBar() {
  return (
    <SideBarWrapper>
      <ProfileBoard>
        <ProfileImg>
          <img alt="profile-img" src="https://placekitten.com/200/200" />
        </ProfileImg>
        <ProfileDesc>
          <span>김아현</span>
          <div>컴퓨터공학과</div>
        </ProfileDesc>
      </ProfileBoard>
      <TagWrapper>
        <span>게시판</span>
        <div>
          <span>공지사항</span>
          <span>Q&A</span>
          <span>자유게시판</span>
        </div>
      </TagWrapper>
      <TagWrapper>
        <span>과제관리</span>
        <div>
          <span>프론트</span>
          <span>백엔드</span>
          <span>기획·디자인</span>
        </div>
      </TagWrapper>
      <TagWrapper>
        <span>프로젝트</span>
        <div>
          <span>프론트</span>
          <span>백엔드</span>
          <span>기획·디자인</span>
          <span>프로젝트 회의</span>
        </div>
      </TagWrapper>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  position: fix;
  display: flex;
  width: 190px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBoard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
  }
`;

const ProfileDesc = styled.div`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #b9b9b9;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #6d6d6d;
  padding: 20px 0 0 0;
  span {
    font-size: 12px;
    line-height: 15px;
    color: #979797;
  }

  div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 16px;
    padding: 20px 11px;
    font-weight: 500;
    span {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.32px;
      color: #ffffff;
    }
  }

  &:nth-child(4) {
    border: none;
  }
`;
