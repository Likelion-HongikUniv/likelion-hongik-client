import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BLACK_1, BLACK_2 } from "../../styles/theme";
import { Logo } from "../icons/Logo";
import { LogoMobile } from "../icons/LogoMobile";
import { Menu } from "../icons/Menu";
import { ProfileButton } from "./ProfileButton";
import { Column, Row } from "./Wrapper";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nowTagState } from "../../states/atoms";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userInfoState } from "../../states/user";
import useAutoLogin from "../../hooks/useAutoLogin";
import useMediaQuery from "../../hooks/useMediaQuery";
import { isLoggedInState } from "../../states";
import { MenuClose } from "../icons/MenuClose";
import { ITag } from "../../interfaces/category";

export function Header() {
  useAutoLogin();
  const isPC = useMediaQuery("(min-width: 992px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const setNowTag = useSetRecoilState<ITag>(nowTagState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [isMenu, setMenu] = useState(false);

  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenu(!isMenu);
  };

  const onClickHeaderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.name;
    if (page === "community/BOARD") {
      setNowTag({ key: "NOTICE", text: "공지사항" });
    }
    window.location.replace(`/${page}`);
  };

  const NavPC = () => {
    return (
      <>
        <Wrapper>
          <Logo type="pc" />
          <Row style={{ position: "relative" }} gap="60px" alignItems="center" justifyContent="center">
            <HeaderButton onClick={onClickHeaderButton} name="recruit">
              지원하기
            </HeaderButton>
            <HeaderButton onClick={onClickHeaderButton} name="community/BOARD">
              커뮤니티
            </HeaderButton>
            <ProfileButton />
          </Row>
        </Wrapper>
      </>
    );
  };

  const NavTablet = () => {
    return (
      <>
        <Wrapper>
          <Logo type="tablet" />
          <Row gap="60px" alignItems="center" justifyContent="center">
            <HeaderButton onClick={onClickHeaderButton} name="recruit">
              지원하기
            </HeaderButton>
            <HeaderButton onClick={onClickHeaderButton} name="community/BOARD">
              커뮤니티
            </HeaderButton>
            <ProfileButton />
          </Row>
        </Wrapper>
      </>
    );
  };

  const NavMobile = () => {
    return (
      <>
        <MobileWrapper isMenu={isMenu}>
          <Logo type="mobile" />
          <Row alignItems="center">
            {!isMenu && <ProfileButton />}
            <MenuButton onClick={onClickMenu}>{isMenu ? <MenuClose /> : <Menu />}</MenuButton>
          </Row>
        </MobileWrapper>
        {isMenu && (
          <ToggleWrapper>
            <HeaderMobileButton onClick={onClickHeaderButton} name="">
              홈
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="recruit">
              지원하기
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="community/BOARD">
              커뮤니티
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="mypage/post">
              마이페이지
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="login">
              {isLoggedIn ? "로그아웃" : "로그인"}
            </HeaderMobileButton>
          </ToggleWrapper>
        )}
      </>
    );
  };

  return <>{isPC ? <NavPC /> : isTablet ? <NavTablet /> : <NavMobile />}</>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 21.25em;
  position: fixed;
  z-index: 1;
  background-color: ${BLACK_1};
  /* background-color: aqua; */
  /* @media (min-width: 391px) {
    width: 100%;
    justify-content: left;
    align-items: baseline;
  } */
  @media (min-width: 768px) {
    width: 100%;
    padding: 0px 40px;
    height: 60px !important;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    width: 100%;
    padding: 0px 340px;
    height: 90px !important;
    justify-content: space-between;
  }
`;

const HeaderButton = styled.button`
  @media (min-width: 768px) {
    font-size: 16px;
    color: white;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    color: white;
  }
`;

const MobileWrapper = styled.div<{ isMenu: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  background-color: ${(props) => (props.isMenu ? "#333333" : BLACK_1)};
  z-index: 2;
`;

const HeaderMobileButton = styled.button`
  font-size: 1.25rem;
  padding: 16px 0;
  color: white;
`;

const MenuButton = styled.button``;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  padding: 82px 20px 40px 20px;
  position: fixed;
  z-index: 1;
  background-color: #333333;
`;
