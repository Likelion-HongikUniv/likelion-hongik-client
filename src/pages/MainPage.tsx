import { Header } from "../components/elements/Header";
import { Main } from "../components/mainPage/Main";
import Curriculum from "../components/mainPage/Curriculum";
import Project from "../components/mainPage/Project";
import Recruiting from "../components/mainPage/Recruiting";
import Channel from "../components/elements/Channel";
import Footer from "../components/elements/Footer";
import styled from "styled-components";
import { Section } from "../components/elements/Wrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

export function MainPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token')
  axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   if (token) {
  //     navigate('/');
  //     localStorage.setItem('token', token)
  //   }
  // })
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE2NzQ0MDc0NzAsImV4cCI6MTY3NDQxMTA3MCwiZW1haWwiOiJkbHdsYWxzMTI4OUBnbWFpbC5jb20iLCJyb2xlIjoiR1VFU1QifQ._FXTDLDsCCe5mK0v1YzFfbVMufgGvWg3bOzmRzwuH_s"
  axios.get(
    "http://13.124.126.164:8080/profile",
    {
      headers: {
        "Content-Type": `application/json`,
        JWT: `${accessToken}`,
      },
    },
  );
  
  
  return (
    <>
      <Header />
      <Section>
        <MainPageContainer>
          <Main />
          <>
            <Title>Curriculum</Title>
            <Desc>멋쟁이 사자처럼의 파트별 커리큘럼을 소개합니다.</Desc>
            <Curriculum />
          </>
          <>
            <Title>Our Projects</Title>
            <Desc>역대 기수에서 진행한 프로젝트를 소개합니다.</Desc>
            <Project />
          </>
          <>
            <Title>Recruiting</Title>
            <Desc>멋쟁이 사자처럼에 지원하기</Desc>
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
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 40px;
  margin-top: 220px;
  @media (max-width: 390px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const Desc = styled.span`
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;
  @media (max-width: 390px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
