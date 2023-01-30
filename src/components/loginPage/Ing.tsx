//Ing.tsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../states/index";
import { profileState } from "../../states";
import { userInfoState } from "../../states/user";



const Ing = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(userState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [profileImage, setProfileImage] = useRecoilState(profileState);
  const token = searchParams.get("token");

  const getProfile = async () => {
    await axios
      .get(`http://localhost:8080/profile`, {
    //   .get(`http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080/profile`, {
        // withCredentials: true,
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        console.log(response);
        setUsername(response.data.name);
        setProfileImage(response.data.profileImage);
        if(token){
            setUserInfo({ userId: response.data.id, profileImageSrc: response.data.profileImage, username: response.data.name, accessToken: token });
            console.log("setUserInfo 완료!");
        }
        if(response.data.isJoined == false&&response.data.role == "GUEST"){ // 멋사회원도 아니고 그냥 소셜로그인 한 사람
            console.log("멋사 회원이 아니에요!");
            navigate("/");
        }
        else if(response.data.isJoined == false&&response.data.role == "USER"){
            console.log("멋사 회원 + 회원가입");
            navigate("/login/detail");
        }
        else{
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
