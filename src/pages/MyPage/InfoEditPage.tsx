import { Header } from "../../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../../styles/theme";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { EditPart } from "../../components/myPage/EditPart";
import { Section } from "./../../components/elements/Wrapper";

export function InfoEditPage() {
  return (
    <>
      <Header />
      <Section>
        <ForDiv>
          <MyPageNav />
          <EditPart />
        </ForDiv>
      </Section>
    </>
  );
}

const ForDiv = styled.div`
  /* width: 100vw; */
  height: 1142px;
  background-color: ${BLACK_1};
  display: flex;
  justify-content: center;
  /* margin-left: 8.33vw; */

  @media (max-width: 768px) {
    //모바일
    height: max-content;
    padding-top: 139px;
    margin-left: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
