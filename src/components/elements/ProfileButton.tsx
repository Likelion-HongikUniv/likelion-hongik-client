import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInState } from "../../states";
import { PersonIcon } from "../icons/PersonIcon";
import useMediaQuery from "../../hooks/useMediaQuery";

export function ProfileButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const isPC = useMediaQuery("(min-width: 1024px)");

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const loggedInState = e.currentTarget.name;
    // if (loggedInState === "로그인") {
    //   navigate("/login");
    // }
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    } else {
      navigate("/login");
    }
  };

  return (
    <Wrapper name={isLoggedIn ? "김아현" : "로그인"} onClick={onClick} isPC={isPC}>
      <PersonIcon />
      {isLoggedIn ? "로그아웃" : "로그인"}
    </Wrapper>
  );
}

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
`;
