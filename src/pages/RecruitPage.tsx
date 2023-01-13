import { Header } from "./../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../styles/theme";
import { WHITE_1 } from "./../styles/theme";
import { RecruitBackImg } from "./../components/icons/RecruitBackImg";
import Footer from "../components/elements/Footer";
import { RecruitInfo } from "../components/recruitPage/RecruitInfo";
import { Curriculum } from "../components/recruitPage/Curriculum";
import { Part } from "../components/recruitPage/Part";
import { Requirement } from "../components/recruitPage/Requirement";
import { QnA } from "../components/recruitPage/QnA";
import { Tip } from "../components/recruitPage/Tip";
import { Section } from "../components/elements/Wrapper";
import Channel from "../components/elements/Channel";

export function RecruitPage() {
  return (
    <>
      <Header />
      <Section>
        <Wrapper style={{ height: "700px" }}>
          <RecruitBackImg />
          <RecruitInfo />
        </Wrapper>
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
  width: 100vw;
  height: 100%;
  background-color: ${BLACK_1};
  z-index: 1;
  color: ${WHITE_1};
  display: flex;
  justify-content: center;
  /* position: relative; */
`;
