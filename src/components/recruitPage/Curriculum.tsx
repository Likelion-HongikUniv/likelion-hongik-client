import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

export function Curriculum() {
  return (
    <ForDiv>
      <TitleText>모집요강</TitleText>
      <DetailText>멋쟁이 사자처럼의 파트별 커리큘럼을 소개합니다.</DetailText>
      <TimeBar>
        <TimePoint />
        <TimePoint style={{ marginLeft: "342px" }} />
        <TimePoint style={{ marginLeft: "327px" }} />
        <TimePoint style={{ marginLeft: "352px" }} />
      </TimeBar>
      <div>
        <Schedule>2022.02.23 ~ 03.13</Schedule>
        <Schedule style={{ marginLeft: "195px" }}>2022.03.15</Schedule>
        <Schedule style={{ marginLeft: "251px" }}>2022.03.16 ~ 03.18</Schedule>
        <Schedule style={{ marginLeft: "209px" }}>2022.03.20</Schedule>
      </div>
      <div>
        <TimeText>지원서 제출기간</TimeText>
        <TimeText style={{ marginLeft: "185px" }}>1차 합격 발표</TimeText>
        <TimeText style={{ marginLeft: "199px" }}>면접</TimeText>
        <TimeText style={{ marginLeft: "323px" }}>최종 합격 발표</TimeText>
      </div>
    </ForDiv>
  );
}

const ForDiv = styled.div`
  font-weight: 700;
  margin-left: 340px;
  display: inline-block;
`;

const TitleText = styled.div`
  font-size: 40px;
  line-height: 48px;
  padding-top: 240px;
`;

const DetailText = styled.div`
  font-size: 28px;
  line-height: 33.6px;
  color: #dfdfdf;
  margin-top: 30px;
  font-weight: 700;
`;

const TimeBar = styled.div`
  margin-top: 120px;
  width: 1240px;
  height: 20px;
  border-radius: 30px;
  background: #33333399;
`;

const TimePoint = styled.div`
  width: 20px;
  height: 20px;
  background: #ed7f30;
  border-radius: 50%;
  display: inline-block;
`;

const Schedule = styled.div`
  display: inline-block;
  margin-top: 40px;
  color: ${WHITE_1};
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
`;

const TimeText = styled.div`
  color: ${WHITE_1};
  font-weight: 600;
  font-size: 28px;
  line-height: 33.6px;
  margin-top: 13px;
  display: inline-block;
`;
