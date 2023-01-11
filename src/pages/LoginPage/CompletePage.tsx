import styled from "styled-components";
import { Complete } from "../../components/loginPage/Complete";
import { Header } from "./../../components/elements/Header";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";

export function CompletePage() {
  return (
    <>
      <Header />
      <Container>
        <Complete />
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
  text-align: center;
`;
