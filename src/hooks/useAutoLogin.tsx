import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../states";

export default function useAutoLogin() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const pathname = window.location.href;

  const accessToken = localStorage.getItem("token");
  const privatePage = "";
  pathname.includes("myPage") ||
    pathname.includes("post") ||
    pathname.includes("community") ||
    pathname.includes("post"); // 로그인 해야만 접근 가능한 페이지명

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    } else if (!accessToken && privatePage) {
      navigate("/");
    }
  }, [accessToken]);
}
