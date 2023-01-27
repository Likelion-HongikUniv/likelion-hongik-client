import styled from "styled-components";

export function Curriculum() {
  return (
    <Box>
      <div>
        <PartName>모집 요강</PartName>
        <PartText>멋쟁이 사자처럼의 파트별 커리큘럼을 소개합니다.</PartText>
        <BarContainer>
          <div>
            <Dot1>
              <Date>2022.02.23 ~ 03.13</Date>
              <Text>지원서 제출기간</Text>
            </Dot1>
            <Dot2>
              <Date>2022.03.15</Date>
              <Text>1차 합격 발표</Text>
            </Dot2>
            <Dot3>
              <Date>2022.03.16 ~ 03.18</Date>
              <Text>면접</Text>
            </Dot3>
            <Dot4>
              <Date>2022.03.20</Date>
              <Text>최종 합격 발표</Text>
            </Dot4>
          </div>
        </BarContainer>
      </div>
    </Box>
  );
}
const Box = styled.div`
  height: 330px;
  margin-top: 50px;
  margin-left: 340px;
  @media (max-width: 391px) {
    margin-left: 0px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-left: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-left: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const PartName = styled.div`
  color: white;
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 700;
  @media (max-width: 391px) {
    font-size: 28px;
    line-height: 33.89px;
    margin-bottom: 16px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 32px;
    line-height: 21px;
    margin-bottom: 18px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 36px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const PartText = styled.div`
  color: #dfdfdf;
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 700;
  margin-bottom: 120px;

  @media (max-width: 391px) {
    font-size: 16px;
    line-height: 19.2px;
    padding-right: 20px;
    margin-bottom: 40px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 22px;
    margin-bottom: 70px;
    padding-right: 20px;
    line-height: 21px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 26px;
    margin-bottom: 90px;
    padding-right: 20px;
    line-height: 22.6px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const BarContainer = styled.div`
  width: 1240px;
  height: 20px;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 30px;
  position: absolute;

  @media (max-width: 391px) {
    width: 20px;
    height: 320px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    width: 20px;
    height: 420px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    width: 710px;
    height: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Dot1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  border-radius: 50px;
  background: #ed7f30;
`;

const Dot2 = styled(Dot1)`
  position: absolute;
  left: 320px;

  @media (max-width: 391px) {
    left: 0px;
    top: 90px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    left: 0px;
    top: 120px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    left: 180px;
    top: 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Dot3 = styled(Dot2)`
  left: 640px;

  @media (max-width: 391px) {
    top: 180px;
    left: 0px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    top: 240px;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    top: 0;
    left: 350px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Dot4 = styled(Dot3)`
  left: 960px;
  @media (max-width: 391px) {
    left: 0px;
    top: 270px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    top: 360px;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    top: 0;
    left: 570px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Date = styled.div`
  margin-top: 40px;
  width: 167px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;

  @media (max-width: 391px) {
    margin-left: 40px;
    margin-top: 0px;
    font-size: 12px;
    line-height: 14.4px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-left: 40px;
    margin-top: 0px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-left: 0;
    margin-top: 40px;
    font-size: 18px;
    line-height: 21.6px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Text = styled.div`
  width: 180px;
  height: 34px;
  font-weight: 600;
  font-size: 28px;
  line-height: 33.6px;
  margin-top: 13px;

  @media (max-width: 391px) {
    margin-left: 40px;
    margin-top: 8px;
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-left: 40px;
    margin-top: 12px;
    font-size: 24px;
    line-height: 26px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-top: 8px;
    margin-left: 0;
    font-size: 24px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
