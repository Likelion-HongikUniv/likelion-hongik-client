import { useEffect, useState } from "react";
import styled from "styled-components";
import Part1 from "./Curriculum/Part1";
import Part2 from "./Curriculum/Part2";
import Part3 from "./Curriculum/Part3";
import Part4 from "./Curriculum/Part4";
import "../../styles/curriculum.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Curriculum = () => {
  const [content, setContent] = useState("1");
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setContent(id);
  };
  const selectComponent: any = {
    1: <Part1 />,
    2: <Part2 />,
    3: <Part3 />,
    4: <Part4 />,
  };

  useEffect(() => {
    const btnId = ["1", "2", "3", "4"];
    const nonBtnId = btnId.filter((item) => item !== content);
    document.getElementById(content)!.style.color = "#000000";
    document.getElementById(content)!.style.backgroundColor = "#EC8030";
    nonBtnId.map((item) => {
      document.getElementById(item)!.style.color = "#FFFFFF";
      document.getElementById(item)!.style.backgroundColor = "#333333";
      return null;
    });
  }, [content]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <Container data-aos="fade-up">
      <BoxContainer>
        <PartBtn id="1" onClick={handleClickButton}>
          <PartName id="1">기획</PartName>
          <PartText id="1">
            사용자 경험(UX)을 중심으로 <br />
            서비스를 기획하며, 서비스를 개발하는 동안
            <br />
            프로젝트 전체 여정을 관리합니다.
          </PartText>
        </PartBtn>
        <PartBtn id="2" onClick={handleClickButton}>
          <PartName id="2">디자인</PartName>
          <PartText id="2">
            기획자가 설계한 스토리보드를
            <br />
            바탕으로 디자인 요소를 사용하여
            <br />
            사용자 인터페이스(UI)를 디자인합니다.
          </PartText>
        </PartBtn>
        <br />
        <PartBtn id="3" onClick={handleClickButton}>
          <PartName id="3">프론트엔드</PartName>
          <PartText id="3">
            API를 통해 주고받은 데이터를 이용하여
            <br /> 최적의 사용자 경험과 성능을
            <br />
            이끌어낼 수 있는 서비스를 개발합니다.
          </PartText>
        </PartBtn>
        <PartBtn id="4" onClick={handleClickButton}>
          <PartName id="4">백엔드</PartName>
          <PartText id="4">
            API 개발 및 데이터를 관리하고,
            <br /> 다양한 프레임워크 등을 이용해 서비스의 <br />
            전체적인 인프라를 구현합니다.
          </PartText>
        </PartBtn>
      </BoxContainer>
      <PartContainer id="animation">{content && <TimeLine>{selectComponent[content]}</TimeLine>}</PartContainer>
    </Container>
  );
};

const PartBtn = styled.button`
  width: 448px;
  height: 240px;
  border-radius: 20px;
  text-align: left;
  margin: 0px 20px;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    /* width: 247px; */
    width: 280px;
    height: 141px;
    flex-shrink: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px; // 기존 218 width

    height: 148px; // 기존 148 height
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 400px;
    height: 190px;
  }
  @media (min-width: 1025px) {
    width: 550px;
    height: 250px;
  }
`;

const PartName = styled.p`
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  margin-left: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    margin-left: 20px;
    margin-bottom: 8px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
    margin-left: 20px;
    margin-bottom: 0px;
  }
`;

const PartText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  margin-left: 40px;
  margin-right: 40px;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 23px;
    margin-left: 20px;
    margin-top: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
    width: 160px;
    height: 72px;
    margin-left: 20px;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;

const PartContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
`;

const TimeLine = styled.div`
  width: 1240px;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

const BoxContainer = styled.div`
  @media (max-width: 768px) {
    height: 180px;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
  }
`;

export default Curriculum;
