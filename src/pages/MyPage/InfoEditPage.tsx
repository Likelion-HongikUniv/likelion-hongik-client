import { Header } from "../../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../../styles/theme";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { EditPart } from "../../components/myPage/EditPart";

export function InfoEditPage() {
  return (
    <>
      <Header />
      <ForDiv>
        <MyPageNav />
        <EditPart />
      </ForDiv>
    </>
  );
}

const ForDiv = styled.div`
  width: 100%;
  height: 1142px;
  background-color: ${BLACK_1};
  display: flex;
  justify-content: center;
`;
