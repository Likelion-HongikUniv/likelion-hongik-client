import client from "./client";

export async function getPostDetail(postId: number) {
  const token = localStorage.getItem("token");
  return await client
    .get(`/community/post/${postId}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // setBoardData(response.data);
        // setCommentsData(response.data.comments);
        return response.data;
      }
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 500) {
        alert("오류코드 401, 접근 권한이 없습니다. 로그인이 필요합니다.");
      }
      if (err.response.status === 404) {
        alert("게시글을 찾을 수 없습니다.");
      }
      window.location.href = "/";
      throw err;
    });
}
