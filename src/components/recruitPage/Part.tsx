import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

export function Part() {
  return (
    <ForDiv>
      <div>
        <TitleText>모집 직군</TitleText>
        <BoxGrid>
          <PartBox>
            <PartText>기획·디자인</PartText>
            <PartSmallText>
              고객 중심 사고를 바탕으로
              <br />
              서비스 기획·디자인 일련의 과정을 배워
              <br />
              실제 서비스를 기획합니다.
            </PartSmallText>
          </PartBox>
          <PartBox>
            <PartText>프론트엔드</PartText>
            <PartSmallText>
              모바일 앱과 웹 서비스 개발을 위한
              <br />
              이론을 배우고 실습합니다.
              <br />
              안드로이드/iOS/웹 파트로 나뉩니다.
            </PartSmallText>
          </PartBox>
          <PartBox>
            <PartText>백엔드</PartText>
            <PartSmallText>
              시스템 설계부터 배포까지,
              <br />
              서비스 및 데이터의 흐름을 관리하며
              <br />
              전반적인 Life Cycle을 경험합니다.
            </PartSmallText>
          </PartBox>
        </BoxGrid>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding: 0 340px;
  /* margin-left: 150px; */

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
    /* display: inline; */
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
    padding-top: 220px;
    font-size: 28px;
    line-height: 33.89px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding-top: 360px;
    font-size: 32px;
    line-height: 36px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    padding-top: 240px;
    font-size: 36px;
    line-height: 32px;
    margin-bottom: 48px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const PartBox = styled.div`
  height: 240px;
  width: 400px;
  border-radius: 20px;
  background: #333333cc;
  margin-top: 60px;

  @media (max-width: 391px) {
    margin-top: 20px;
    width: 350px;
    height: 192px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-top: 32px;
    width: 370px;
    height: 220px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-top: 20px;
    width: 360px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  justify-content: center;

  @media (max-width: 391px) {
    display: inline;
    /* padding-right: 20px; */
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    display: inline;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    justify-content: center;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const PartText = styled.div`
  color: ${WHITE_1};
  padding: 32px;
  font-weight: 800;
  font-size: 32px;
  line-height: 38.73px;

  @media (max-width: 391px) {
    padding: 24px 0 20px 24px;
    font-size: 28px;
    line-height: 33.89px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding: 26px 0 20px 26px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    line-height: 38.73px;
    padding: 28px 0 28px 28px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const PartSmallText = styled.div`
  padding: 3px 0px 32px 32px;
  font-size: 20px;
  font-weight: 500; //600
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 391px) {
    padding: 0 0 0 24px;
    font-size: 16px;
    line-height: 30px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding: 0 0 0 26px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    padding: 0 0 0 28px;
    line-height: 34px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
