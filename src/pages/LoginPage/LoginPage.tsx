import { Header } from "../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import styled from "styled-components";
import { SocialLogin } from "../../components/loginPage/SocialLogin";

export function LoginPage() {
  return (
    <>
      <Header />
      <Container>
        <SocialLogin />
      </Container>
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
