import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { profileImgState, teamState, editState } from "./../../states/index";
import { NavSelectPart } from "../myPage/NavSelectPart";
import { BLACK_1, WHITE_1 } from "./../../styles/theme";
import emoji_lion from "./../images/emoji_lion_24x24.png";

export function MyPageNav() {
  const profileImg = useRecoilValue(profileImgState);
  const [info, setInfo] = useRecoilState(editState);
  const team = useRecoilValue(teamState);

  useEffect(() => {
    getUserInfoAPI();
  }, []);

  const getUserInfoAPI = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`http://13.125.72.138:8080/mypage`, {
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
        <ProfileCopy src={profileImg || emoji_lion} />
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
  /* margin-left: 340px; */
  /* 각 컨테이너에 margin-left: 8.33vw; 주고 justify-content 하면 가운데 정렬! */
  padding-top: 140px;
  letter-spacing: -0.32px;

  @media (max-width: 768px) {
    //모바일
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    overflow: hidden;
    width: max-content;
    padding-left: 40px;
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
