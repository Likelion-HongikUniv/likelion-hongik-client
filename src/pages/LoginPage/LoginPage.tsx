import { Header } from "../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import styled from "styled-components";
import { SocialLogin } from "../../components/loginPage/SocialLogin";
import Footer from "./../../components/elements/Footer";
import { Section } from "./../../components/elements/Wrapper";

export function LoginPage() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SocialLogin />
        </Container>
        <Footer style={{ marginTop: "317px" }} />
      </Section>
    </>
  );
}

const Container = styled.div`
  background-color: ${BLACK_1};
  height: 100%;
  color: ${WHITE_1};
  display: flex;
  justify-content: center;
`;
