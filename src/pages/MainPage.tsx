import { Header } from "../components/elements/Header";
import { Main } from "../components/mainPage/Main";
import Curriculum from "../components/mainPage/Curriculum";
import Project from "../components/mainPage/Project";
import Recruiting from "../components/mainPage/Recruiting";
import Channel from "../components/elements/Channel";
import Footer from "../components/elements/Footer";
import styled from "styled-components";
import { Section } from "../components/elements/Wrapper";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <Header />
      <Section style={{ overflow: "hidden" }}>
        <MainPageContainer>
          <Main />
          <>
            <Title data-aos="fade-up">Curriculum</Title>
            <Desc data-aos="fade-up">멋쟁이사자처럼 11기의 파트별 커리큘럼을 소개합니다.</Desc>
            <Curriculum />
          </>
          <>
            <Title data-aos="fade-up">Our Projects</Title>
            <Desc data-aos="fade-up">홍익대학교 멋쟁이사자처럼 10기에서 진행한 프로젝트를 소개합니다.</Desc>
            <Project />
          </>
          <>
            <Title data-aos="zoom-in">Recruiting</Title>
            <Desc data-aos="zoom-in">멋쟁이사자처럼에 지원하기</Desc>
            <Recruiting />
          </>
          <Channel />
        </MainPageContainer>
      </Section>
      <Footer />
    </>
  );
}

const MainPageContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 40px;
  margin-top: 220px;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const Desc = styled.span`
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
