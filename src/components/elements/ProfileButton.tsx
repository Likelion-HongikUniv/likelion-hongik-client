import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInState, userState } from "../../states";
import useMediaQuery from "../../hooks/useMediaQuery";
import { DropMenu } from "./DropMenu";
import emoji_lion_24x24 from "./../images/emoji_lion_24x24.png";

export function ProfileButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [isMenu, setMenu] = useState(false);
  const [isDropDown, setDropDown] = useState(false);
  const isPC = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const name = userInfo.nickname;
  const profileImg = userInfo.profileImageSrc;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <Wrapper
        onClick={onClick}
        onMouseOver={() => {
          setDropDown(!isDropDown);
        }}
        isPC={isPC}
      >
        <PersonIcon url={profileImg} />
        {isLoggedIn ? name : "로그인"}
      </Wrapper>
      {isLoggedIn && isDropDown && <DropMenu isActive={isDropDown} />}
    </div>
  );
}

const PersonIcon = styled.div<{ url: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.url ? props.url : emoji_lion_24x24)});
  border-radius: 50%;
  background-position: center;
  background-size: cover;
`;

const Wrapper = styled.button<{ isPC: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  height: ${(props) => (props.isPC ? "48px" : "35px")};
  font-size: ${(props) => (props.isPC ? "1.25rem" : "1rem")};
  padding: ${(props) => (props.isPC ? "16px" : "0 8px")};
  gap: ${(props) => (props.isPC ? "8px" : "4px")};

  background-color: #1e1e1e;

  @media (min-width: 769px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;
