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
              API에서 가져온 데이터의 출력, 입력을
              <br />
              통한 비즈니스 로직 구성과 사용자
              <br />
              인터페이스에 대한 작업을 수행합니다.
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding: 0 0;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 32px;
    width: 370px;
    height: 220px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 20px;
    width: 220px;
    height: 148px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 20px;
    width: 220px;
    height: 148px;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    display: inline;
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
