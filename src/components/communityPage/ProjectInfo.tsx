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
  gap: 1.0417vw;
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      margin-left: 0.7813vw;
      font-size: 0.8333vw;
      color: #c6c6c6;
    }
  }
  @media all and (max-width: 768px) {
    gap: 4.1026vw;
    div {
      span {
        font-size: 3.5897vw;
        margin-left: 6vw;
      }
    }
  }
`;

const TeamName = styled.h1`
  font-weight: 700;
  font-size: 1.25vw;
  margin: 0;
  @media all and (max-width: 768px) {
    font-size: 5.1282vw;
  }
`;

const ImgBox = styled.div`
  width: 1.3021vw;
  height: 1.6667vw;
  overflow-x: visible;
  img {
    position: absolute;
    width: 1.6667vw;
    height: 1.6667vw;
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
  @media all and (max-width: 768px) {
    width: 6vw;
    height: 8.2051vw;
    img {
      width: 8.2051vw;
      height: 8.2051vw;
    }
  }
`;
