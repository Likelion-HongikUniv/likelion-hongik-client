import styled from "styled-components";
import main_recruiting from "../images/main_recruiting.png";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Recruiting = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate("/recruit");
  };
  return (
    <Fade>
      <RecruitingContainer>
        <BoxContainer>
          <Now>NOW</Now>
          <h1 style={{ fontSize: "40px" }}>멋쟁이 사자처럼 11기</h1>
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
  width: 1040px;
  height: 337px;
  border-radius: 20px;
  border: 0.5px solid white;
  text-align: left;
  padding: 50px;
  margin: 50px;
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
  margin-top: 60px;
  line-height: 40px;
`;

const ApplyBtn = styled.button`
  width: 400px;
  height: 80px;
  background: #ed7f30;
  border-radius: 20px;
  font-weight: 500;
  font-size: 28px;
`;

export default Recruiting;
