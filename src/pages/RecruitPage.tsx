import { Header } from "./../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../styles/theme";
import { WHITE_1 } from "./../styles/theme";
import recruitBackImg from "./../components/images/recruitBackImg.svg";
import Footer from "../components/elements/Footer";
import { RecruitInfo } from "../components/recruitPage/RecruitInfo";
import { Curriculum } from "../components/recruitPage/Curriculum";
import { Part } from "../components/recruitPage/Part";
import { Requirement } from "../components/recruitPage/Requirement";
import { QnA } from "../components/recruitPage/QnA";
import { Tip } from "../components/recruitPage/Tip";
import { Column, Section } from "../components/elements/Wrapper";
import Channel from "../components/elements/Channel";

export function RecruitPage() {
  return (
    <>
      <Header />
      <Section>
        <Column justifyContent="center" alignItems="center">
          <Section style={{ paddingTop: "0" }}>
            <Wrapper style={{ backgroundImage: `url(${recruitBackImg})` }}>
              <RecruitInfo />
            </Wrapper>
          </Section>
        </Column>
        <Wrappers>
          <ForDiv>
            <Curriculum />
            <Part />
            <Requirement />
            <QnA />
            <Tip />
          </ForDiv>
        </Wrappers>
        <div style={{ textAlign: "center", marginTop: "185px" }}>
          <Channel />
          <Footer style={{ marginTop: "70px" }} />
        </div>
      </Section>
    </>
  );
}

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100%;
  background-color: ${BLACK_1};
  z-index: 1;
  color: ${WHITE_1};
  display: flex;
  justify-content: center;
`;

const Wrappers = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${BLACK_1};
  z-index: 1;
  color: ${WHITE_1};
  display: flex;
  justify-content: center;
`;

const ForDiv = styled.div`
  margin-top: 360px;
  @media (max-width: 391px) {
    margin-top: 111.79px;
  }

  @media (min-width: 391px) and (max-width: 768px) {
    margin-top: 150px;
    width: 100vw;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
    margin-top: 240px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
