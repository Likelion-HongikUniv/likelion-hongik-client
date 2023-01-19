import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BLACK_1 } from "../../styles/theme";
import { Logo } from "../icons/Logo";
import { ProfileButton } from "./ProfileButton";
import { Row } from "./Wrapper";

export function Header() {
  const navigate = useNavigate();
  const onClickHeaderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.name;
    navigate(`/${page}`);
  };

  return (
    <Wrapper>
      <Logo />
      <Row gap="60px" alignItems="center">
        <HeaderButton onClick={onClickHeaderButton} name="introduction">
          멋사 소개
        </HeaderButton>
        <HeaderButton onClick={onClickHeaderButton} name="recruit">
          지원하기
        </HeaderButton>
        <HeaderButton onClick={onClickHeaderButton} name="community">
          커뮤니티
        </HeaderButton>
        <ProfileButton />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 340px;
  position: fixed;
  z-index: 1;
  background-color: ${BLACK_1};
`;

const HeaderButton = styled.button`
  font-size: 1.25rem;
  color: white;
`;
