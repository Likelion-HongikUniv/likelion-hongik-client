//Ing.tsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoggedInState, userState } from "../../states/index";
import BeatLoader from "react-spinners/BeatLoader";

const Ing = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const UID = searchParams.get("UID");
  const getProfile = async () => {
    axios
      .post(`https://www.hongiklikelion.click/v1/token`, UID, {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((response) => {
        const token = response.data.JWT;
        if (response.data && token) {
          localStorage.setItem("token", token);
          setUserInfo({
            ...userInfo,
            accessToken: token,
          });
        }
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
        throw err;
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
