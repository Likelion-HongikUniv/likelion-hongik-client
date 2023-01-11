import styled from "styled-components";
import { Header } from "../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { LoginDetailInfo } from "../../components/loginPage/LoginDetailInfo";

export function LoginDetailPage() {
  return (
    <>
      <Header />
      <Container>
        <LoginDetailInfo />
      </Container>
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
