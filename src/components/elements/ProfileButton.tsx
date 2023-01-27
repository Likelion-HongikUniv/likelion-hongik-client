import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInState } from "../../states";
import { PersonIcon } from "../icons/PersonIcon";

export function ProfileButton() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const loggedInState = e.currentTarget.name;
    if (loggedInState === "로그인") {
      navigate("/login");
    }
    else{ // logout
      localStorage.setItem('token', "");
      window.open("/", "_self");
    }
  };

  return (
    <Wrapper name={isLoggedIn ? "김아현" : "로그인"} onClick={onClick}>
      <PersonIcon />
      {isLoggedIn ? "로그아웃" : "로그인"}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 48px;
  background-color: #1e1e1e;
  border-radius: 40px;
  font-size: 1.25rem;
  color: white;
  gap: 8px;
`;
