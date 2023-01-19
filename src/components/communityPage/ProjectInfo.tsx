import styled from "styled-components";

export function ProjectInfo() {
  return (
    <TeamWrapper>
      <TeamName>건빵이최고 팀</TeamName>
      <div>
        <div>
          <ImgBox>
            <img src="https://placekitten.com/200/300" alt="team-profile-img" />
          </ImgBox>
          <ImgBox>
            <img src="https://placekitten.com/200/300" alt="team-profile-img" />
          </ImgBox>
          <ImgBox>
            <img src="https://placekitten.com/200/300" alt="team-profile-img" />
          </ImgBox>
        </div>
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
      margin-left: 15px;
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
  width: 25px;
  height: 32px;
  overflow-x: visible;
  img {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
  &:first-child {
    opacity: 1;
  }
  &:nth-child(2) {
    opacity: 0.8;
  }
  &:nth-child(3) {
    opacity: 0.5;
  }
`;
