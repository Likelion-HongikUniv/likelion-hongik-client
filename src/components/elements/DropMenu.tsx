import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoggedInState, userState } from "../../states";

interface DropMenuProps {
  isActive: boolean;
}

export function DropMenu(isActive: DropMenuProps) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserInfo("");
      localStorage.removeItem("token");
    } else {
      navigate("/login");
    }
  };

  return (
    <DropWrapper>
      <DropButton
        onClick={() => {
          window.location.replace(`/myPage/post`);
        }}
      >
        마이페이지
      </DropButton>
      <DropButton onClick={onClick}>로그아웃</DropButton>
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
