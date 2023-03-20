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

  // 리프레쉬 토큰 로직 테스트
  if (token) {
    // axios
    //   .get(`https://www.hongiklikelion.click/refresh`, {
    //     headers: {
    //       "Content-Type": `application/json`,
    //     },
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  useEffect(() => {
    if (token) {
      axios
        .get(`https://www.hongiklikelion.click/userinfo`, { headers: { JWT: token } })
        .then((res) => {
          const data = res.data;
          console.log(data);

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
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            // alert("시간이 지나 로그인이 만료되었습니다.");
            // 리프레쉬 토큰 로직 추가
            // axios
            //   .get("http://13.125.72.138/refresh", {
            //     headers: {
            //       "Content-Type": `application/json`,
            //     },
            //   })
            //   .then((res) => {
            //     console.log(res);
            //   });
          }
        });
    } else if (!token && privatePage) {
      alert("로그인 후 이용해주세요🦁");
      navigate("/");
    } else if (userInfo.role !== "USER" && privatePage) {
      alert("아기사자만 접근 가능한 기능입니다🦁");
      navigate("/");
    }
  }, [pathname, token]);
}
