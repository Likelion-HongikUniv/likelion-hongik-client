import styled from "styled-components";
import { WHITE_1, BLACK_1 } from "../../styles/theme";

export function RecruitInfo() {
  return (
    <BasicInfo>
      <Diving>
        <Now>NOW</Now>
        <BigText>멋쟁이 사자처럼 11기</BigText>
        <SmallText>멋쟁이 사자처럼의 파트별 커리큘럼을 소개합니다.</SmallText>
        <ForDiv />
        <BasicText>지원 기간 : 2022.02.23 ~ 2022.03.13</BasicText>
        <BasicText>모집 인원 : 기획·디자인 n명 / 프론트엔드 n명 / 백엔드 n명</BasicText>
      </Diving>

      <Divs>
        <RegBtn>지원 폼 작성하기</RegBtn>
      </Divs>
    </BasicInfo>
  );
}

const BasicInfo = styled.div`
  width: 1150px;
  background-color: transparent;
  margin-top: 60px;

  @media (max-width: 391px) {
    margin-top: 29px;
    /* padding-left: 20px; */
  }

  @media (min-width: 391px) and (max-width: 768px) {
    margin-top: 32px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-top: 50px;
    padding-left: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
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
  @media (max-width: 391px) {
    font-size: 28px;
    line-height: 33.6px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 35px;
    line-height: 36px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 42px;
    line-height: 42px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const SmallText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #dfdfdf;
  margin-top: 24px;
  @media (max-width: 391px) {
    /* margin-left: 20px; */
    margin-top: 12px;
    font-size: 16px;
    line-height: 19.2px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    margin-top: 14px;
    font-size: 18px;
    line-height: 21px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-top: 18px;
    font-size: 22px;
    line-height: 24px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const ForDiv = styled.div`
  height: 330px;
  background-color: transparent;

  @media (max-width: 391px) {
    height: 291px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    height: 310px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    height: 326px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Diving = styled.div`
  @media (max-width: 391px) {
    padding-left: 20px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    padding-left: 20px;
  }
`;

const BasicText = styled.div`
  font-weight: 600;
  line-height: 28.8px;
  font-size: 24px;
  color: ${WHITE_1};
  margin-top: 16px;

  @media (max-width: 391px) {
    /* margin-left: 20px; */
    font-size: 16px;
    line-height: 19.2px;
    margin-top: 8px;
    padding-right: 80px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    font-size: 20px;
    line-height: 21px;
    margin-top: 10px;
    padding-right: 65px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    font-size: 22px;
    line-height: 22.6px;
    margin-top: 12px;
    padding-right: 80px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

const Divs = styled.div`
  @media (max-width: 391px) {
    text-align: center;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    text-align: center;
  } ;
`;

const RegBtn = styled.button`
  margin-top: 60px;
  width: 400px;
  height: 64px;
  background-color: #ed7f30;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.96px;
  text-align: center;

  @media (max-width: 391px) {
    width: 350px;
    height: 52px;
    line-height: 19.2px;
    font-size: 16px;
    margin-top: 40px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    //모바일
    width: 370px;
    height: 55px;
    line-height: 21px;
    margin-top: 45px;
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    width: 395px;
    height: 60px;
    line-height: 22.6px;
    margin-top: 52px;
    font-size: 20px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
