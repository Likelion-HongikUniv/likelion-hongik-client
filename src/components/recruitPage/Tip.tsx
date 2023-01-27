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
        <div style={{ textAlign: "center" }}>
          <RegBtn>지원 바로가기</RegBtn>
        </div>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 0 340px;

  @media (max-width: 391px) {
    padding: 0 0;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding: 0 0;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    padding: 0 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 260px;

  @media (max-width: 391px) {
    font-size: 28px;
    padding-top: 120px;
    line-height: 33.89px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 32px;
    padding-top: 140px;
    line-height: 36px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 36px;
    padding-top: 240px;
    line-height: 42px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const DetailText = styled.div`
  font-size: 28px;
  line-height: 33.6px;
  color: #dfdfdf;
  margin-top: 30px;
  font-weight: 700;

  @media (max-width: 391px) {
    font-size: 16px;
    margin-top: 16px;
    line-height: 23px;
    width: 240px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 22px;
    margin-top: 18px;
    line-height: 26px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 24px;
    margin-top: 22px;
    line-height: 28.6px;
    padding-right: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const TipGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin-top: 80px;

  @media (max-width: 391px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-top: 40px;
    gap: 12px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-top: 60px;
    gap: 14px;
    /* padding-left: 10px; */
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-top: 68px;
    gap: 18px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
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

  @media (max-width: 391px) {
    width: 350px;
    height: 106px;
    border-radius: 12px;
    padding: 32px 20px;
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    width: 370px;
    height: 112px;
    border-radius: 16px;
    text-align: center;
    padding: 32px 22px;
    font-size: 16px;
    line-height: 23px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    width: 748px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const RegBtn = styled.button`
  margin-top: 80px;
  width: 400px;
  height: 64px;
  background-color: #ed7f30;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 33.6px;
  text-align: center;

  @media (max-width: 391px) {
    margin-left: 0;
    width: 350px;
    margin-top: 40px;
    font-size: 16px;
    line-height: 19.2px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-left: 0;
    width: 370px;
    margin-top: 42px;
    font-size: 18px;
    line-height: 22.6px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-left: 0;
    width: 748px;
    margin-top: 60px;
    font-size: 20px;
    line-height: 33.6px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
