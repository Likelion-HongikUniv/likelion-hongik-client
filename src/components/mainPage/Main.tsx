import main_main from "../images/main_main.png";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export function Main() {
  return (
    <Fade duration={2000}>
      <MainContainer>
        <Fade damping={0.1}>
          <Title>
            <span>ABOUT&nbsp;</span>
            <span style={{ color: "#ED7F30" }}> 'MUTSA'</span>
          </Title>
          <TextContainer>
            ‘멋쟁이사자처럼’은 국내에서 가장 많은 학생들이 활동하고 있는 전국 대학이 함께하는 연합 코딩 동아리입니다.
            <br />
            ‘멋쟁이사자처럼’은 창업과 서비스 개발에 대한 독보적인 교육을 제공합니다.
            <br />
            코딩을 모르는 분이라도 누구나 참여할 수 있으며, 그 무엇보다 나의 아이디어를 실현시키겠다는 열정이
            중요합니다.
          </TextContainer>
        </Fade>
      </MainContainer>
    </Fade>
  );
}
const MainContainer = styled.div`
  background-image: url(${main_main});
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-size: cover;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 70px;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextContainer = styled.div`
  height: 132px;
  display: flex;
  justify-content: center;
  margin: 40px auto;
  font-size: 24px;
  font-weight: 600;
  line-height: 44px;
  word-break: keep-all;
  @media (max-width: 768px) {
    width: 348px;
    height: 168px;
    font-size: 15px;
    line-height: 24px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 595px;
    height: 110px;
    font-size: 16px;
    line-height: 22px;
  }
`;
