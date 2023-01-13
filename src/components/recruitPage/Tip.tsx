import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";
import { BLACK_1 } from "./../../styles/theme";

export function Tip() {
  return (
    <ForDiv>
      <div>
        <TitleText>서류·면접 합격 꿀팁!</TitleText>
        <DetailText>멋쟁이 사자처럼 전 기수생이 알려주는 멋사 합격 꿀팁이에요.</DetailText>
        <TipGrid>
          <Tips>
            2학기를 활동하기에 ‘열정'있는 모습을 많이 봅니다.
            <br />
            지원서에 활동을 위한 열정을 녹여내면 좋을 것 같습니다.
          </Tips>
          <Tips>
            2학기를 활동하기에 ‘열정'있는 모습을 많이 봅니다.
            <br />
            지원서에 활동을 위한 열정을 녹여내면 좋을 것 같습니다.
          </Tips>
          <Tips>
            프로젝트 경험이나 협업 경험에 대한 질문은 면접과도
            <br />
            연관이 많으니 꾸밈없이 작성하는 것을 추천합니다.
          </Tips>
          <Tips>
            프로젝트 경험이나 협업 경험에 대한 질문은 면접과도
            <br />
            연관이 많으니 꾸밈없이 작성하는 것을 추천합니다.
          </Tips>
        </TipGrid>
        <RegBtn>지원 바로가기</RegBtn>
      </div>
    </ForDiv>
  );
}

const RegBtn = styled.button`
  margin-top: 80px;
  margin-left: 420px;
  width: 400px;
  height: 80px;
  background-color: #ed7f30;
  border-radius: 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  padding: 23px 50px;
`;

const ForDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 0 340px;
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 260px;
`;

const DetailText = styled.div`
  font-size: 28px;
  line-height: 33.6px;
  color: #dfdfdf;
  margin-top: 30px;
  font-weight: 700;
`;

const TipGrid = styled.div`
  display: grid;
  grid-template-columns: 610px 610px;
  grid-template-rows: 140px 140px;
  gap: 20px;
  margin-top: 80px;
`;

const Tips = styled.div`
  width: 610px;
  height: 140px;
  background: ${BLACK_1};
  border: 1px solid #ed7f30;
  border-radius: 20px;
  padding: 32px 40px; //32 42
  text-align: center;
  color: ${WHITE_1};
  font-weight: 500; //600
  font-size: 24px;
  line-height: 38px;
`;
