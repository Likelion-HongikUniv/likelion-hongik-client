import React from "react";
import styled from "styled-components";

export function ProjectInfo() {
  return (
    <TeamWrapper>
      <TeamName>건빵이최고 팀</TeamName>
      <div>
        <ImgBox>
          <img alt="team-profile-img" />
          <img alt="team-profile-img" />
          <img alt="team-profile-img" />
        </ImgBox>
        <span>팀원 13명</span>
      </div>
    </TeamWrapper>
  );
}

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 92px;
      font-weight: 500;
      font-size: 16px;
      color: #c6c6c6;
    }
  }
`;

const TeamName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  margin: 0;
`;

const ImgBox = styled.div`
  display: flex;
  position: relative;
  counter-reset: var-count 0;
  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;

    &:first-child {
      position: absolute;
      left: 0;
      z-index: 3;
    }
    &:nth-child(2) {
      position: absolute;
      left: 20px;
      z-index: 2;
    }
    &:nth-child(3) {
      position: absolute;
      left: 40px;
      z-index: 1;
    }
  }
`;
