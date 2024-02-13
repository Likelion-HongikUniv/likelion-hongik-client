import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

export function Part() {
  return (
    <ForDiv>
      <Div1>
        <TitleText>모집 직군</TitleText>
        <BoxGrid>
          <PartBox>
            <PartText>기획</PartText>
            <PartSmallText>
              사용자 경험(UX)을 중심으로
              <br />
              서비스를 기획하며, 서비스를 개발하는 동안
              <br />
              프로젝트 전체 여정을 관리합니다.
              {/* 고객 중심 사고를 바탕으로
              <br />
              서비스 기획·디자인 일련의 과정을 배워
              <br />
              실제 서비스를 기획합니다. */}
            </PartSmallText>
          </PartBox>
          <PartBox>
            <PartText>디자인</PartText>
            <PartSmallText>
              기획자가 설계한 스토리보드를 바탕으로
              <br />
              디자인 요소를 사용하여
              <br />
              사용자 인터페이스(UI)를 디자인합니다.
              {/* 시스템 설계부터 배포까지,
              <br />
              서비스 및 데이터의 흐름을 관리하며
              <br />
              전반적인 Life Cycle을 경험합니다. */}
            </PartSmallText>
          </PartBox>
          <PartBox>
            <PartText>프론트엔드</PartText>
            <PartSmallText>
              API를 통해 주고받은 데이터를 이용하여
              <br /> 최적의 사용자 경험과 성능을
              <br />
              이끌어낼 수 있는 서비스를 개발합니다.
            </PartSmallText>
          </PartBox>
          <PartBox>
            <PartText>백엔드</PartText>
            <PartSmallText>
              API 개발 및 데이터를 관리하고,
              <br /> 다양한 프레임워크 등을 이용해 서비스의 <br />
              전체적인 인프라를 구현합니다.
            </PartSmallText>
          </PartBox>
        </BoxGrid>
      </Div1>
    </ForDiv>
  );
}

const Div1 = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const ForDiv = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding: 0 340px;
  /* margin-left: 150px; */
  margin: 0;

  @media (max-width: 391px) {
    padding: 0 0;
    margin-left: 4.5px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding: 0 0;
    /* margin-left: 20px; */
    align-items: center;
    justify-items: center;
    justify-content: center;
    margin-left: 29px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding: 0 0;
    /* display: inline; */
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 0 0;
    /* display: inline; */
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding-top: 360px;
    font-size: 32px;
    line-height: 36px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding-top: 160px;
    font-size: 28px;
    line-height: 33.89px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-top: 160px;
    font-size: 28px;
    line-height: 33.89px;
    margin-bottom: 40px;
  }
`;

const PartBox = styled.div`
  height: 260px;
  width: 600px;
  border-radius: 20px;
  background: #333333cc;
  margin-top: 60px;

  @media (max-width: 391px) {
    margin-top: 20px;
    width: 350px;
    height: 192px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 32px;
    width: 370px;
    height: 220px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 20px;
    width: 350px;
    height: 148px;
    justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 20px;
    width: 350px;
    height: 148px;
  }
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  justify-content: center;

  @media (max-width: 391px) {
    display: inline;
    /* padding-right: 20px; */
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    display: inline;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    display: grid;
    column-gap: 17px;
    justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    display: grid;
    column-gap: 17px;
    justify-content: center;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding: 26px 0 20px 26px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    line-height: 24.2px;
    padding: 20px 0 12px 20px;
    font-size: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    line-height: 24.2px;
    padding: 20px 0 12px 20px;
    font-size: 20px;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding: 0 0 0 26px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding: 0px 28px 20px 20px;
    line-height: 24px;
    font-size: 11px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 0px 28px 20px 20px;
    line-height: 24px;
    font-size: 11px;
  }
`;
