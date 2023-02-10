import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

export function QnA() {
  return (
    <ForDiv>
      <div>
        <TitleText>자주 묻는 질문</TitleText>
        <SmallText>
          찾으시는 내용이 없다면 홍익대학교 멋쟁이사자처럼 인스타그램(@likelion_hongik)으로 궁금한 점을 전달해 주세요.
        </SmallText>
        <div>
          <Question style={{ marginTop: "60px" }}>Q. 휴학 중인데 지원할 수 있나요?</Question>
          <Answer>네, 지원 할 수 있습니다. 멋사는 재학생, 휴학생 제한이 없습니다!</Answer>
          <Question>Q. 개발 경험이 없어도 지원할 수 있나요?</Question>
          <Answer>네, 지원 할 수 있습니다. 개발을 배우고자 하는 열정이 중요합니다.</Answer>
          <Question>Q. 활동은 언제인가요??</Question>
          <Answer>멋사는 1년 단위로 모집하며 매주 목요일에 세션이 진행됩니다!</Answer>
          <Question>Q. 여러 파트 지원할 수 있나요?</Question>
          <Answer>아쉽게도 하나의 파트만 지원 가능합니다.</Answer>
        </div>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 700;
  display: flex;
  padding: 0 340px;

  @media (max-width: 391px) {
    padding: 0 0;
    justify-content: center;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding: 0 0;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding: 0 0;
    /* padding-left: 40px; */
    /* justify-content: center; */
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 0 0;
    /* padding-left: 40px; */
    /* justify-content: center; */
  }
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 260px;

  @media (max-width: 391px) {
    font-size: 28px;
    line-height: 33.89px;
    padding-top: 80px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 32px;
    line-height: 38px;
    padding-top: 140px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    font-size: 28px;
    line-height: 33.89px;
    padding-top: 136px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 28px;
    line-height: 33.89px;
    padding-top: 136px;
  }
`;

const SmallText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #dfdfdf;
  margin-top: 30px;
  padding-right: 20px;

  @media (max-width: 391px) {
    margin-top: 16px;
    font-size: 16px;
    line-height: 23px;
    width: 347px;
    height: 46px;
    margin-bottom: 16px;
    padding-right: 0px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 18px;
    font-size: 20px;
    line-height: 26px;
    width: 392px;
    margin-bottom: 20px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 16px;
    font-size: 16px;
    line-height: 28px;
    width: 550px;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 16px;
    font-size: 16px;
    line-height: 28px;
    width: 550px;
    margin-bottom: 20px;
  }
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

  @media (max-width: 391px) {
    margin-top: 24px;
    font-size: 24px;
    line-height: 28.8px;
    width: 318px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 28px;
    font-size: 28px;
    line-height: 30.2px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 40px;
    font-size: 24px;
    line-height: 28.8px;
    padding-right: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 40px;
    font-size: 24px;
    line-height: 28.8px;
    padding-right: 20px;
  }
`;

const Answer = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
  margin-top: 20px;
  color: #dfdfdf;

  @media (max-width: 391px) {
    margin-top: 12px;
    font-size: 16px;
    line-height: 23px;
    width: 339px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 14px;
    font-size: 20px;
    line-height: 26px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 12px;
    font-size: 20px;
    line-height: 23px;
    padding-right: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 12px;
    font-size: 20px;
    line-height: 23px;
    padding-right: 20px;
  }
`;
