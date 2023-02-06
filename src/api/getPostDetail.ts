import axios from "axios";

const baseURL = "http://13.124.126.164:8080";

function GetPostDetail(postId: number) {
  const token = localStorage.getItem("token");
  axios
    .get(`${baseURL}/community/post/${postId}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
}

export default GetPostDetail;
