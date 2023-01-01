import { Header } from "../components/elements/Header";
import { Main } from "../components/mainPage/Main";
import Curriculum from "../components/mainPage/Curriculum";
import Project from "../components/mainPage/Project";
import Recruiting from "../components/mainPage/Recruiting";
import Channel from "../components/mainPage/Channel";
import styled from "styled-components";

export function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <Main />
      <Curriculum />
      <Project />
      <Recruiting />
      <Channel />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
