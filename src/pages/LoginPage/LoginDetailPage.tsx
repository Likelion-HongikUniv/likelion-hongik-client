import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { LoginDetailInfo } from "../../components/loginPage/LoginDetailInfo";
import Footer from "./../../components/elements/Footer";
import { Section } from "../../components/elements/Wrapper";

export function LoginDetailPage() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <LoginDetailInfo />
        </Container>
        <Footer />
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
`;
