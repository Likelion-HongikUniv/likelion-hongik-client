import client from "./client";

export async function getMyPost() {
  const token = localStorage.getItem("token");
  return await client
    .get(`/mypage/posts/`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 500) {
        alert("🦁 접근 권한이 없습니다. 로그인이 필요합니다 🦁");
      }
      window.location.href = "/";
      throw err;
    });
}
