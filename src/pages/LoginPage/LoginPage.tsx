import { Header } from "../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import styled from "styled-components";
import { SocialLogin } from "../../components/loginPage/SocialLogin";
import Footer from "./../../components/elements/Footer";

export function LoginPage() {
  return (
    <>
      <Header />
      <Container>
        <SocialLogin />
      </Container>
      <Diving>
        <Footer />
      </Diving>
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

const Diving = styled.div`
  margin-top: 333px;
  @media (max-width: 768px) {
    //모바일
    margin-top: 35vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    margin-top: 369px;
  }
`;
