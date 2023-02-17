import styled from "styled-components";
import { WHITE_1, BLACK_1 } from "../../styles/theme";
import { useState } from "react";

export function RecruitInfo() {
  const [regDate, setRegDate] = useState(false);

  const gotoReg = () => {
    if (regDate === false) {
      alert("지원 기간이 아닙니다!");
    } else {
      window.open("https://forms.gle/KE1tRsetSke2u9za7");
    }
  };

  return (
    <BasicInfo>
      <Diving>
        <Now>NOW</Now>
        <BigText>멋쟁이사자처럼 11기</BigText>
        <SmallText>
          멋쟁이사자처럼 지원에 관련된 것들을 소개합니다.
          {/* <br /> 지원자는 기획 & 디자인/ 프론트엔드 / 백엔드 중 하나의
          파트를 맡아 멋사 활동을 진행하게 됩니다. <br />
          교육 진행 후 세 개의 파트가 협업하여 함께 프로젝트를 진행하게 됩니다. <br />이 과정을 통해 다른 파트들과도
          소통하며 일련의 과정을 이해하게 됩니다. <br />
          또한 해커톤 등 여러 대회에 참가함으로써 실력을 더욱 기를 수 있는 기회도 주어집니다.
          <br />
          해당 팀대로 세션 및 해커톤이 진행되므로 중간에 트랙 변경이 불가합니다.
          <br />
          매주 목요일 오후 6시에 진행되는 세션에는 필수로 참여해 주시기 바랍니다. */}
        </SmallText>
        <ForDiv />
        <BasicText>지원 기간: 2023.02.20 ~ 2023.03.10</BasicText>
        <BasicText>모집 인원: 총 30명 내외 선발 예정</BasicText>
      </Diving>
      <Divs>
        <RegBtn onClick={gotoReg}>지원 폼 작성하기</RegBtn>
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

  @media (min-width: 391px) and (max-width: 767px) {
    margin-top: 32px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: 48px;
    padding-left: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 48px;
    padding-left: 160px;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 35px;
    line-height: 36px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    // 테블릿 세로
    font-size: 28px;
    line-height: 33.6px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 28px;
    line-height: 33.6px;
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    margin-top: 14px;
    font-size: 18px;
    line-height: 21px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    // 테블릿 세로
    margin-top: 12px;
    font-size: 16px;
    line-height: 19.2px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 12px;
    font-size: 16px;
    line-height: 19.2px;
  }
`;

const ForDiv = styled.div`
  height: 330px;
  background-color: transparent;

  @media (max-width: 391px) {
    height: 291px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    height: 310px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    height: 289px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    height: 289px;
  }
`;

const Diving = styled.div`
  @media (max-width: 391px) {
    padding-left: 20px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 20px;
    line-height: 21px;
    margin-top: 10px;
    padding-right: 65px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    font-size: 16px;
    line-height: 19.2px;
    margin-top: 8px;
    width: 290px;
    padding-right: 0;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 16px;
    line-height: 19.2px;
    margin-top: 8px;
    width: 290px;
    padding-right: 0;
  }
`;

const Divs = styled.div`
  @media (max-width: 391px) {
    text-align: center;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    text-align: center;
  }
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
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    width: 370px;
    height: 55px;
    line-height: 21px;
    margin-top: 45px;
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    width: 350px;
    height: 52px;
    line-height: 19.2px;
    margin-top: 40px;
    font-size: 16px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 395px;
    width: 350px;
    height: 52px;
    line-height: 19.2px;
    margin-top: 40px;
    font-size: 16px;
  }
`;
