import styled from "styled-components";
import main_recruiting from "../images/main_recruiting.png";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Recruiting = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    window.location.replace("/recruit");
  };
  return (
    <Fade>
      <RecruitingContainer>
        <BoxContainer>
          <Now>NOW</Now>
          <Title>멋쟁이 사자처럼 11기</Title>
          <Text>
            지원 기간 : 2022.02.23 ~ 2022.03.13
            <br />
            모집 인원 : 기획·디자인 n명 / 프론트엔드 n명 / 백엔드 n명
          </Text>
        </BoxContainer>
        <ApplyBtn onClick={onClickBtn}>지원 바로가기</ApplyBtn>
      </RecruitingContainer>
    </Fade>
  );
};

const BoxContainer = styled.div`
  background-image: url(${main_recruiting});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  width: 1040px;
  height: 337px;
  border-radius: 20px;
  border: 0.5px solid white;
  text-align: left;
  padding: 40px;
  margin: 50px;
  @media (max-width: 390px) {
    width: 350px;
    height: 297px;
    padding: 30px 20px;
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
  @media (max-width: 390px) {
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
  @media (max-width: 390px) {
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
  @media (max-width: 390px) {
    font-size: 28px;
  }
`;

export default Recruiting;
