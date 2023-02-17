import { Header } from "../../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../../styles/theme";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { EditPart } from "../../components/myPage/EditPart";
import { Section } from "./../../components/elements/Wrapper";
import MyPageSelectNav from "../../components/myPage/MyPageSelectNav";
import useMediaQuery from "./../../hooks/useMediaQuery";

export function InfoEditPage() {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  return (
    <>
      <Header />
      <Section>
        <Diving>
          <ForDiv>
            {isTablet ? <MyPageSelectNav /> : <MyPageNav />}
            <EditPart />
          </ForDiv>
        </Diving>
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

  @media (max-width: 767px) {
    //모바일
    height: max-content;
    padding-top: 60px; //피그마에선 139px
    margin-left: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: inline-block;
    justify-content: center;
    padding-top: 57px;
  }
`;

const Diving = styled.div`
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }
`;
