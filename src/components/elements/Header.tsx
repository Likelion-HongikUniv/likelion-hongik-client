import React, { useEffect } from "react";
import styled from "styled-components";
import { BLACK_1 } from "../../styles/theme";
import { Logo } from "../icons/Logo";
import { ProfileButton } from "./ProfileButton";
import { Row } from "./Wrapper";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nowTagState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { userInfoState } from "../../states/user";
// import useAutoLogin from "../../hooks/useAutoLogin";
import { isLoggedInState } from "../../states";

export function Header() {
  // useAutoLogin();

  const navigate = useNavigate();
  const setNowTag = useSetRecoilState<string>(nowTagState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onClickHeaderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.name;
    if (page === "community/post") {
      setNowTag("notice");
    }
    navigate(`/${page}`);
  };

  useEffect(() => {
    const token = userInfo.accessToken;
    if (token) {
      navigate("/");
      localStorage.setItem("likelion-hongik-accessToken", token);
      setIsLoggedIn(true);
      // TODO 받은 token으로 유저 정보 GET API
      setUserInfo({ userId: 1, profileImageSrc: "", username: "장영준", accessToken: token });
    }
  });

  return (
    <Wrapper>
      <Logo />
      <Row gap="60px" alignItems="center">
        <HeaderButton onClick={onClickHeaderButton} name="recruit">
          지원하기
        </HeaderButton>
        <HeaderButton onClick={onClickHeaderButton} name="community/post">
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
  @media (max-width: 391px) {
    width: 390px;
    justify-content: left;
    align-items: baseline;
  }
`;

const HeaderButton = styled.button`
  font-size: 1.25rem;
  color: white;
`;
