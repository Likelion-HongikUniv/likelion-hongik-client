import styled from "styled-components";

export function Requirement() {
  return (
    <ForDiv>
      <div>
        <TitleText>자격요건</TitleText>
        <ForLi>
          <li>매주 토요일, 오후 2~5시에 진행되는 정규 세션에 참여할 수 있는 분</li>
          <li>4개월간 맡은 역할을 충실히 이행할 수 있는 책임감 있는 분</li>
          <li>멋사 활동을 재밌게 할 수 있는 분</li>
          <li>새로운 것을 배울 의지가 있고, 성장을 위해 노력하는 분</li>
          <li>팀원들과 원활한 의사소통이 가능하신 분</li>
          <li>좋은 결과만 추구하는 것이 아닌, 모든 과정을 즐기는 태도를 가지신 분</li>
        </ForLi>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 700;
  padding: 0 340px;
  display: flex;
  @media (max-width: 391px) {
    padding: 0 0;
    justify-content: center;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    justify-content: center;
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
    padding-top: 80px;
    font-size: 28px;
    line-height: 33.89px;
    /* padding-left: 20px; */
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding-top: 140px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    padding-top: 240px;
    font-size: 36px;
    line-height: 42px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const ForLi = styled.div`
  padding-top: 40px;
  font-weight: 600;
  font-size: 26px;
  line-height: 48px;
  color: #dfdfdf;

  @media (max-width: 391px) {
    font-size: 16px;
    line-height: 28px;
    width: 348px;
    text-indent: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 24px;
    line-height: 38px;
    width: 372px;
    /* padding-right: 20px; */
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    width: max-content;
    font-size: 26px;
    line-height: 46px;
    padding-right: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
