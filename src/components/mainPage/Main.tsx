import main_main from "../images/main_main.png";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";


export function Main() {
  return (
    <Fade duration={2000}>
      <MainContainer>
        <Fade cascade damping={0.1}>
          <Title>
            <span>ABOUT&nbsp;</span>
            <span style={{ color: "#ED7F30" }}> 'MUTSA'</span>
          </Title>
          <TextContainer>
            ‘멋쟁이 사자처럼’은 국내에서 가장 많은 학생들이 활동하고 있는 전국 대학이 함께하는 연합 코딩 동아리입니다.
            <br />
            ‘멋쟁이 사자처럼’은 창업과 서비스 개발에 대한 독보적인 교육을 제공합니다.
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
`;

const TextContainer = styled.div`
  height: 132px;
  justify-content: center;
  font-size: 18px;
  line-height: 44px;
`;
