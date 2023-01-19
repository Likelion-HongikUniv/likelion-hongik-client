import styled from "styled-components";
import { Complete } from "../../components/loginPage/Complete";
import { Header } from "./../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import { Section } from "./../../components/elements/Wrapper";
import Footer from "../../components/elements/Footer";

export function CompletePage() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Complete />
        </Container>
        <Footer style={{ marginTop: "131px" }} />
      </Section>
    </>
  );
}

const Container = styled.div`
  background-color: ${BLACK_1};
  width: 100%;
  height: 100%;
  color: ${WHITE_1};
  display: flex;
  justify-content: center;
  text-align: center;
`;
