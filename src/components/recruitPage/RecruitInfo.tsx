import styled from "styled-components";
import { WHITE_1, BLACK_1 } from "../../styles/theme";

export function RecruitInfo() {
  return (
    <BasicInfo>
      <Now>NOW</Now>
      <BigText>멋쟁이 사자처럼 11기</BigText>
      <SmallText>멋쟁이 사자처럼의 파트별 커리큘럼을 소개합니다.</SmallText>
      <div style={{ height: "330px", backgroundColor: "transparent" }} />
      <BasicText>지원 기간 : 2022.02.23 ~ 2022.03.13</BasicText>
      <BasicText>모집 인원 : 기획·디자인 n명 / 프론트엔드 n명 / 백엔드 n명</BasicText>
      <RegBtn>지원 폼 작성하기</RegBtn>
    </BasicInfo>
  );
}

const BasicInfo = styled.div`
  width: 100%;
  padding-left: 340px;
  top: 0px;
  background-color: transparent;
  position: absolute;
  padding-top: 160px;
`;

const Now = styled.div`
  width: 57px;
  height: 29px;
  background-color: ${WHITE_1};
  color: ${BLACK_1};
  gap: 10px;
  border-radius: 40px;
  padding: 5px 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.36px;
`;

const BigText = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  color: ${WHITE_1};
`;

const SmallText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #dfdfdf;
  margin-top: 24px;
`;

const BasicText = styled.div`
  font-weight: 600;
  line-height: 28.8px;
  font-size: 24px;
  color: ${WHITE_1};
  margin-top: 16px;
`;

const RegBtn = styled.button`
  margin-top: 60px;
  width: 400px;
  height: 80px;
  background-color: #ed7f30;
  border-radius: 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  padding: 23px 50px;
`;
