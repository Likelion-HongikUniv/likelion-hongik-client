import { Header } from "../../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../../styles/theme";
import { MyPageNav } from "../../components/elements/MyPageNav";
import { EditPart } from "../../components/myPage/EditPart";
import { useEffect } from "react";

export function InfoEditPage() {
  // useEffect(() => {
  //   console.log(localStorage.getItem("nickname"));
  // }, []);
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
  width: 100vw;
  height: 1142px;
  background-color: ${BLACK_1};
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    //모바일
    height: max-content;
    padding-top: 139px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;
