import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

export function QnA() {
  return (
    <ForDiv>
      <TitleText>자주 묻는 질문</TitleText>
      <SmallText>찾으시는 내용이 없다면 멋사 카카오톡 채널(@muts)으로 궁금한 점을 전달해 주세요.</SmallText>
      <div>
        <Question style={{ marginTop: "60px" }}>Q. X학년인데 지원할 수 있나요?</Question>
        <Answer>네, 지원 할 수 있습니다. 멋사는 학년, 나이 제한이 없습니다!</Answer>
        <Question>Q. 개발 경험이 있어야 지원할 수 있나요?</Question>
        <Answer>네, 지원 할 수 있습니다. 멋사는 학년, 나이 제한이 없습니다!</Answer>
        <Question>Q. 활동 시간은 언제인가요??</Question>
        <Answer>2023년 3월 부터 12월까지이며 매주 금요일에 세션이 진행됩니다!</Answer>
        <Question>Q. 여러 파트 지원할 수 있나요?</Question>
        <Answer>아쉽게도 하나의 파트만 지원 가능합니다.</Answer>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 700;
  margin-left: 150px;
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 260px;
`;

const SmallText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #dfdfdf;
  margin-top: 30px;
`;

const Question = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 38.4px;
  color: ${WHITE_1};
  margin-top: 40px;

  ::first-letter {
    color: #ed7f30;
  }
`;

const Answer = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
  margin-top: 20px;
  color: #dfdfdf;
`;
