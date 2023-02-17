import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { profileImgState, teamState, editState, userState } from "./../../states/index";
import { NavSelectPart } from "../myPage/NavBar/NavSelectPart";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import emoji_lion from "./../images/emoji_lion_24x24.png";

export function MyPageNav() {
  const userInfo = useRecoilValue(userState);
  const [info, setInfo] = useRecoilState(editState);
  const team = useRecoilValue(teamState);

  useEffect(() => {
    getUserInfoAPI();
  }, []);

  const getUserInfoAPI = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`http://13.125.72.138:8080/mypage`, {
        // .get(`http://localhost:8080/mypage`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        console.log(response);
        const infoHandler = {
          ...info,
          major: response.data.major,
          nickname: response.data.nickname,
          part: response.data.part,
        };
        setInfo(infoHandler);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LeftNav>
      <div style={{ display: "flex" }}>
        <ProfileCopy src={userInfo.profileImageSrc || emoji_lion} />
        <div style={{ width: "88px" }}>
          <Name>{userInfo.nickname}</Name>
          <Team>{userInfo.team ? `${userInfo.team}팀` : "건빵팀"}</Team>
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
  padding-top: 140px;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    //모바일
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* overflow: hidden;
    width: max-content; */
    display: none;
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
  width: 80px;
`;
