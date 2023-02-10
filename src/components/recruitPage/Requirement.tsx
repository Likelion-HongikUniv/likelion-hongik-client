import styled from "styled-components";

export function Requirement() {
  return (
    <ForDiv>
      <div>
        <TitleText>자격요건</TitleText>
        <ForLi>
          <li style={{ marginBottom: "12px" }}>매주 목요일, 오후 6시에 진행되는 정규 세션에 참여할 수 있는 분</li>
          <li style={{ marginBottom: "12px" }}>1년간 맡은 역할을 충실히 이행할 수 있는 책임감 있는 분</li>
          <li style={{ marginBottom: "12px" }}>아이디어를 실현시키려는 열정을 가진 대학생</li>
          <li style={{ marginBottom: "12px" }}>개발/창업에 도전하고 싶은 대학생</li>
          <li style={{ marginBottom: "12px" }}>새로운 것을 배울 의지가 있고, 성장을 위해 노력하는 분</li>
          <li style={{ marginBottom: "12px" }}>팀원들과 원활한 의사소통이 가능하신 분</li>
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    justify-content: center;
    padding: 0 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding: 0 0;
    /* padding-left: 40px; */
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 0 0;
    /* padding-left: 40px; */
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    padding-top: 140px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    padding-top: 160px;
    font-size: 28px;
    line-height: 33.89px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-top: 160px;
    font-size: 28px;
    line-height: 33.89px;
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
    line-height: 22px;
    width: 348px;
    text-indent: -23px;
    padding-left: 20px;
    /* padding-right: 20px; */
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 24px;
    line-height: 38px;
    width: 372px;
    text-indent: -30px;
    padding-left: 20px;
    padding-right: 0px;
    /* padding-right: 20px; */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    width: 600px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 600px;
    font-size: 20px;
    line-height: 32px;
  }
`;
