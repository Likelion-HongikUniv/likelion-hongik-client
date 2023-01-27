<<<<<<< HEAD
//Ing.tsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../states/index";
import { profileState } from "../../states";
import { userInfoState } from "../../states/user";


=======
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../states/index";
import { profileImgState } from "./../../states/index";
>>>>>>> a2408b11462a19c8bcf59504910e0d4f7f0ed8ec

const Ing = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(userState);
  const [searchParams, setSearchParams] = useSearchParams();
<<<<<<< HEAD
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [profileImage, setProfileImage] = useRecoilState(profileState);
  const token = searchParams.get("token");

  const getProfile = async () => {
    await axios
      .get(`http://localhost:8080/profile`, {
    //   .get(`http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080/profile`, {
=======
  const token = searchParams.get("token");
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);

  const getProfile = async () => {
    await axios
      .get(`http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080/profile`, {
>>>>>>> a2408b11462a19c8bcf59504910e0d4f7f0ed8ec
        // withCredentials: true,
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        console.log(response);
        setUsername(response.data.name);
<<<<<<< HEAD
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
=======
        setProfileImg(response.data.profileImage);
        console.log(response.data.profileImage);
        localStorage.setItem("username", response.data.name); //혹시 몰라서 로컬스토리지에도 이름 저장
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
>>>>>>> a2408b11462a19c8bcf59504910e0d4f7f0ed8ec
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
<<<<<<< HEAD

  useEffect(() => {
    if (token) {
        localStorage.setItem('token', token)
    }
    getProfile();
  }, []);

  return <div>로그인 진행 중…</div>;
};

=======
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
    getProfile();
  }, []);
  return <div>로그인 진행 중…</div>;
};
>>>>>>> a2408b11462a19c8bcf59504910e0d4f7f0ed8ec
export default Ing;
