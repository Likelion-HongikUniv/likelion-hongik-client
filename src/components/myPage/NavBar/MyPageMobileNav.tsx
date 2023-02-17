import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../../styles/theme";
import { useRecoilValue, useRecoilState } from "recoil";
import { editState, profileImgState } from "../../../states/index";
import { NavSelectPartMobile } from "./NavSelectPartMobile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import emoji_lion from "../../images/emoji_lion_24x24.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MyPageSelectNav from "./MyPageSelectNav";

export function MyPageMobileNav() {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const profileImg = useRecoilValue(profileImgState);
  const [info, setInfo] = useRecoilState(editState);
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/myPage/edit");
  };

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
          // team: changeTeam.value,
        };
        setInfo(infoHandler);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <MobileNavContainer>
      <Profile>
        <ProImg src={profileImg || emoji_lion} />
        <div style={{ width: "88px" }}>
          <Name>{info.nickname}</Name>
          <Team>{info.major}</Team>
        </div>
      </Profile>
      {isTablet ? '' : <EditBtn onClick={onNavigate}>정보 변경</EditBtn>}
      {isTablet ? <MyPageSelectNav /> : <NavSelectPartMobile />}
    </MobileNavContainer>
  );
}

const MobileNavContainer = styled.nav`
  width: 100vw;
  height: 250px;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  letter-spacing: -0.32px;
  padding: 0 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProImg = styled.img`
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

const Profile = styled.div`
  display: flex;
  width: 350px;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 688px;
  }
`;
