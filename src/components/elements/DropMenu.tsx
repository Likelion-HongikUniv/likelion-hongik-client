import styled from "styled-components";
import { useState } from "react";
interface DropMenuProps {
  isActive: boolean;
}

export function DropMenu(isActive: DropMenuProps) {
  return (
    <DropWrapper>
      <DropButton
        onClick={() => {
          window.location.replace(`/myPage/post`);
        }}
      >
        마이페이지
      </DropButton>
      <DropButton>로그아웃</DropButton>
    </DropWrapper>
  );
}

const DropWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;

  top: 56px;
  background-color: #333333;

  color: white;
  height: min-height;
`;

const DropButton = styled.button`
  width: max-content;
  color: white;
  padding: 24px;
  letter-spacing: -0.32px;
  font-weight: 500;
`;
