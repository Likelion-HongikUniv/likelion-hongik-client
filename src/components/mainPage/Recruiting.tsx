import styled from "styled-components";
import main_recruiting from "../images/main_recruiting.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import main_recruiting_tablet from "../images/main_recruiting_tablet.png";
import main_recruiting_mobile from "../images/main_recruiting_mobile.png";


const Recruiting = () => {
  const onClickBtn = () => {
    window.location.replace("/recruit");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <RecruitingContainer data-aos="zoom-in">
      <BoxContainer>
        <Now>NOW</Now>
        <Title>멋쟁이사자처럼 11기</Title>
        <Text>
          지원 기간: 2023.02.20 ~ 2023.03.10
          <br />
          모집 인원: 총 30명 내외 선발 예정
        </Text>
      </BoxContainer>
      <ApplyBtn onClick={onClickBtn}>지원 바로가기</ApplyBtn>
    </RecruitingContainer>
  );
};

const BoxContainer = styled.div`
  background-image: url(${main_recruiting});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  width: 1040px;
  height: 337px;
  border-radius: 20px;
  border: 0.5px solid white;
  text-align: left;
  padding: 40px;
  margin: 50px;
  @media (max-width: 768px) {
    width: 350px;
    height: 297px;
    padding: 30px 20px;
    background-image: url(${main_recruiting_mobile});
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 688px;
    height: 350px;
    background-image: url(${main_recruiting_tablet});
  }
`;

const RecruitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Now = styled.span`
  font-weight: 700;
  font-size: 16px;
  background-color: white;
  color: black;
  padding: 5px 8px;
  border-radius: 40px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
  margin-top: 80px;
  line-height: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
    width: 295px;
  }
`;

const ApplyBtn = styled.button`
  width: 400px;
  height: 80px;
  background: #ed7f30;
  border-radius: 20px;
  font-weight: 500;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 350px;
    height: 52px;
    border-radius: 12px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export default Recruiting;
