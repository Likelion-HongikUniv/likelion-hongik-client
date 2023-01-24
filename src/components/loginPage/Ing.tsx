//Ing.tsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../states/index";

const Ing = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(userState);
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  const getProfile = async () => {
    await axios
      .get(`http://localhost:8080/profile`, {
        // withCredentials: true,
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        console.log(response);
        setUsername(response.data.name);
        localStorage.setItem("username", response.data.name); //혹시 몰라서 로컬스토리지에도 이름 저장
        // localStorage.setItem('token', token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
        localStorage.setItem('token', token)
    }
    getProfile();
  }, []);

  return <div>로그인 진행 중…</div>;
};

export default Ing;
