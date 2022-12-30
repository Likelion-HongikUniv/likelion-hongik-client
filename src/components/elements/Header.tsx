import styled from "styled-components";
import { BLACK_1 } from "../../styles/theme";
import { Logo } from "../icons/Logo";

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <HeaderButton>멋사 소개</HeaderButton>
      <HeaderButton>지원하기</HeaderButton>
      <HeaderButton>커뮤니티</HeaderButton>
      <HeaderButton>로그인</HeaderButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${BLACK_1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 340px;
  z-index: 1;
`;

const HeaderButton = styled.button`
  font-size: 20px;
  color: white;
`;
