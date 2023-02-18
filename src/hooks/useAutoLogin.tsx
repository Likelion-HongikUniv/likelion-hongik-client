import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoggedInState, userState } from "../states";

export default function useAutoLogin() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const pathname = window.location.href;
  const token = localStorage.getItem("token");

  const privatePage =
    pathname.includes("myPage") ||
    pathname.includes("post") ||
    pathname.includes("write") ||
    pathname.includes("community"); // 로그인 해야만 접근 가능한 페이지명

  useEffect(() => {
    if (token) {
      axios.get(`http://13.125.72.138:8080/userinfo`, { headers: { JWT: token } }).then((res) => {
        console.log(res);
        const data = res.data;
        if (res.status === 200) {
          setIsLoggedIn(true);
          setUserInfo({
            ...userInfo,
            major: data.major,
            nickname: data.nickname,
            part: data.part,
            profileImageSrc: data.profileImageSrc,
            role: data.role,
            studentId: data.studentId,
            team: data.team,
            userId: data.userId,
            username: data.username,
            accessToken: token,
          });
        } else {
          alert("시간이 지나 로그인이 만료되었습니다.");
          // localStorage.removeItem("token");
          // setIsLoggedIn(false);
          // navigate("/");
        }
      });
    } else if (!token && privatePage) {
      alert("로그인 후 이용해주세요🦁");
      navigate("/");
    }
  }, [pathname, token]);
}
