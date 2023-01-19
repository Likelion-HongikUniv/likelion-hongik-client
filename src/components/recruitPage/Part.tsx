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
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 0 340px;
  /* margin-left: 150px; */
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 260px;
`;

const PartBox = styled.div`
  height: 240px;
  width: 400px;
  border-radius: 20px;
  background: #333333cc;
  margin-top: 60px;
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  column-gap: 20px;
  justify-content: center;
`;

const PartText = styled.div`
  color: ${WHITE_1};
  padding: 32px;
  font-weight: 800;
  font-size: 32px;
  line-height: 38.73px;
`;

const PartSmallText = styled.div`
  padding: 3px 0px 32px 32px;
  font-size: 20px;
  font-weight: 500; //600
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
`;
