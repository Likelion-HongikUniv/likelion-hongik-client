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
        <Wrapper>
          <div style={{ marginTop: "360px" }}>
            <Curriculum />
            <Part />
            <Requirement />
            <QnA />
            <Tip />
          </div>
        </Wrapper>
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
