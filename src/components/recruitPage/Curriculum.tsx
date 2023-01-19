import styled from "styled-components";

export function Curriculum() {
  return (
    <Box>
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
    </Box>
  );
}
const Box = styled.div`
  height: 330px;
  margin-top: 50px;
  margin-left: 340px;
`;

const PartName = styled.div`
  color: white;
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 700;
`;

const PartText = styled.div`
  color: #dfdfdf;
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 700;
  margin-bottom: 120px;
`;

const BarContainer = styled.div`
  width: 1240px;
  height: 20px;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 30px;
  position: absolute;
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
`;

const Dot3 = styled(Dot2)`
  left: 640px;
`;

const Dot4 = styled(Dot3)`
  left: 960px;
`;

const Date = styled.div`
  margin-top: 40px;
  width: 167px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
`;

const Text = styled.div`
  width: 180px;
  height: 34px;
  font-weight: 600;
  font-size: 28px;
  line-height: 33.6px;
  margin-top: 13px;
`;
