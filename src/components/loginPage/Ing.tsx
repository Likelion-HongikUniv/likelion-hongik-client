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
    if (UID === "-1") {
      alert("🦁 이미 이 이메일의 계정이 있습니다. 다른 소셜로그인으로 로그인해주세요 🦁");
      navigate("/login");
    } else {
      axios
        .post(`https://api.likelionhongik.com/v1/token`, UID, {
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
            alert("🦁 멋사 회원이 아니에요 🦁");
            navigate("/");
          } else if (response.data.isJoined === false && response.data.role === "USER") {
            navigate("/login/detail");
          } else {
            alert("🦁 로그인이 완료되었습니다 🦁");
            setIsLoggedIn(true);
            navigate("/");
          }
        })
        .catch((err) => {
          throw err;
        });
    }
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
      {/* <BeatLoader color="#ED7F30" size={50} /> */}
    </div>
  );
};
export default Ing;
