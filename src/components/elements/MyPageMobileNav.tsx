import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import { useRecoilValue } from "recoil";
import { editState, profileState } from "./../../states/index";
import { NavSelectPartMobile } from "../myPage/NavSelectPartMobile";
import { useNavigate } from "react-router-dom";

export function MyPageMobileNav() {
  const profileImg = useRecoilValue(profileState);
  const info = useRecoilValue(editState);
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/myPageEdit");
  };

  return (
    <LeftNav>
      <div style={{ display: "flex" }}>
        <ProfileCopy src={profileImg?.thumbnail} />
        <div style={{ width: "88px" }}>
          <Name>{info.nickname}</Name>
          <Team>{info.team} 팀</Team>
        </div>
      </div>
      <EditBtn onClick={onNavigate}>정보 변경</EditBtn>
      <NavSelectPartMobile />
    </LeftNav>
  );
}

const LeftNav = styled.nav`
  width: 100vw;
  height: 223px;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  letter-spacing: -0.32px;
  padding: 0 20px;
  margin-top: 20px;
`;

const ProfileCopy = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
  object-fit: cover;
`;

const Name = styled.div`
  margin-top: 6px;
  margin-left: 12px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.78px;
`;

const Team = styled.div`
  margin-left: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.94px;
  color: #b9b9b9;
`;

const EditBtn = styled.button`
  width: 350px;
  height: 52px;
  background: #333333;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
`;
