import { useEffect, useState } from "react";
import styled from "styled-components";
import Part1 from "./Curriculum/Part1";
import Part2 from "./Curriculum/Part2";
import Part3 from "./Curriculum/Part3";
import "../../styles/curriculum.css";
import { Fade } from "react-awesome-reveal";


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
  };

  useEffect(() => {
    const btnId = ["1", "2", "3"];
    const nonBtnId = btnId.filter((item) => item !== content);
    document.getElementById(content)!.style.color = "#000000";
    document.getElementById(content)!.style.backgroundColor = "#EC8030";
    nonBtnId.map((item) => {
      document.getElementById(item)!.style.color = "#FFFFFF";
      document.getElementById(item)!.style.backgroundColor = "#333333";
      return null;
    });
  }, [content]);

  return (
    <Fade>
      <Container>
        <div>
          <PartBtn id="1" onClick={handleClickButton}>
            <PartName id="1">기획·디자인</PartName>
            <PartText id="1">
              고객 중심 사고를 바탕으로
              <br />
              서비스 기획·디자인 일련의 과정을 배워
              <br />
              실제 서비스를 기획합니다.
            </PartText>
          </PartBtn>
          <PartBtn id="2" onClick={handleClickButton}>
            <PartName id="2">프론트엔드</PartName>
            <PartText id="2">
              모바일 앱과 웹 서비스 개발을 위한
              <br />
              이론을 배우고 실습합니다.
              <br />
              안드로이드/iOS/웹 파트로 나뉩니다.
            </PartText>
          </PartBtn>
          <PartBtn id="3" onClick={handleClickButton}>
            <PartName id="3">백엔드</PartName>
            <PartText id="3">
              시스템 설계부터 배포까지,
              <br />
              서비스 및 데이터의 흐름을 관리하며
              <br />
              전반적인 Life Cycle을 경험합니다.
            </PartText>
          </PartBtn>
        </div>
        <PartContainer id='animation'>
         {content && <TimeLine>{selectComponent[content]}</TimeLine>}
        </PartContainer>
      </Container>
    </Fade>
  );
};

const PartBtn = styled.button`
  width: 380px;
  height: 240px;
  border-radius: 20px;
  text-align: left;
  margin: 20px;
`;

const PartName = styled.p`
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  margin-left: 40px;
`;

const PartText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  margin-left: 40px;
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
`;

export default Curriculum;
