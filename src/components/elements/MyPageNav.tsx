import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import { useRecoilValue } from "recoil";
import { profileState } from "./../../states/index";
import { NavSelectPart } from "../myPage/NavSelectPart";

export function MyPageNav() {
  const profileImg = useRecoilValue(profileState);

  return (
    <LeftNav>
      <div style={{ display: "flex" }}>
        <ProfileCopy src={profileImg?.thumbnail} />
        <div style={{ width: "88px" }}>
          <Name>김아현</Name>
          <Team>건빵이최고 팀</Team>
        </div>
      </div>
      <NavSelectPart />
    </LeftNav>
  );
}

const LeftNav = styled.nav`
  width: 148px;
  height: 100%;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  position: relative; //스크롤 내려도 따라오는 nav라면 fixed
  margin-left: 340px; //하고 left로 바꾸기, editpart style도 손봐야됨
  padding-top: 140px;
  letter-spacing: -0.32px;
`;

const ProfileCopy = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
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
