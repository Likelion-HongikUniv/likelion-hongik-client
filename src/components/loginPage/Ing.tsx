import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState, IUserInfoState } from "../../states/user";
import { profileImgState } from "./../../states/index";

const Ing = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);

  const getProfile = async () => {
    await axios
      .get(`http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080/profile`, {
        // withCredentials: true,
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        let tmpInfo: IUserInfoState = {
          userId: response.data.userId,
          username: response.data.name,
          profileImageSrc: response.data.profileImage,
          accessToken: token,
        };
        setUserInfo(tmpInfo);
        console.log(userInfo);

        // localStorage.setItem("username", response.data.name); //혹시 몰라서 로컬스토리지에도 이름 저장
        if (response.data.isJoined === false && response.data.role === "GUEST") {
          // 멋사회원도 아니고 그냥 소셜로그인 한 사람
          console.log("멋사 회원이 아니에요!");
          navigate("/");
        } else if (response.data.isJoined === false && response.data.role === "USER") {
          console.log("멋사 회원 + 회원가입");
          navigate("/login/detail");
        } else {
          console.log("멋사 회원 + 로그인");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
    getProfile();
  }, []);
  return <div>로그인 진행 중…</div>;
};
export default Ing;
