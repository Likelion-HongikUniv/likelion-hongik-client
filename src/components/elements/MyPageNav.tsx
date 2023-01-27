import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import { useRecoilValue } from "recoil";
import { profileImgState, teamState, editState } from "./../../states/index";
import { NavSelectPart } from "../myPage/NavSelectPart";

export function MyPageNav() {
  const profileImg = useRecoilValue(profileImgState);
  const info = useRecoilValue(editState);
  const team = useRecoilValue(teamState);

  return (
    <LeftNav>
      <div style={{ display: "flex" }}>
        <ProfileCopy src={profileImg?.thumbnail} />
        <div style={{ width: "88px" }}>
          <Name>{info.nickname}</Name>
          <Team>{team} 팀</Team>
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
  position: relative;
  /* margin-left: 340px; */
  /* 각 컨테이너에 margin-left: 8.33vw; 주고 justify-content 하면 가운데 정렬! */
  padding-top: 140px;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    //모바일
    display: none;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
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
