//Ing.tsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoggedInState, userState } from "../../states/index";
import { profileImgState } from "./../../states/index";
import { userInfoState } from "../../states/user";
import BeatLoader from "react-spinners/BeatLoader";

const Ing = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useRecoilState(userState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const UID = searchParams.get("UID");

  const getProfile = async () => {
    axios
      .post(
        // `http://localhost:8080/v1/token`,
        `http://ec2-13-125-72-138.ap-northeast-2.compute.amazonaws.com:8080/v1/token`,
        UID,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        },
      )
      .then((response) => {
        console.log(response);
        const token = response.data.JWT;
        if (response.data && token) {
          localStorage.setItem("token", token);
          // setUserInfo({
          //   userId: response.data.id,
          //   isJoined: response.data.isJoined,
          //   username: response.data.name,
          //   profileImageSrc: response.data.profileImage,
          //   role: response.data.role,
          //   accessToken: token,
          // });
        }
        // setUsername(response.data.name);

        // if (response.data.isJoined === false) {
        setProfileImg(response.data.profileImage); //회원가입 시에만 소셜프로필사진 저장
        // }

        localStorage.setItem("username", response.data.name); //혹시 몰라서 로컬스토리지에도 이름 저장
        localStorage.setItem("token", response.data.JWT);
        if (response.data.isJoined === false && response.data.role === "GUEST") {
          // 멋사회원도 아니고 그냥 소셜로그인 한 사람
          console.log("멋사 회원이 아니에요!");
          navigate("/");
        } else if (response.data.isJoined === false && response.data.role === "USER") {
          console.log("멋사 회원 + 회원가입");
          navigate("/login/detail");
        } else {
          console.log("멋사 회원 + 로그인");
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoader color="#ED7F30" size={50} />
    </div>
  );
};
export default Ing;
