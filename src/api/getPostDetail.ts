import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IBoard, IComment, IReply } from "../interfaces/comments";
import { commentsListState, boardState } from "../states/atoms";

const baseURL = "http://13.124.126.164:8080";
const baseURL2 = "http://ec2-13-124-126-164.ap-northeast-2.compute.amazonaws.com:8080";

interface postIdProps {
  postId?: any;
}

function GetPostDetail(postId: postIdProps) {
  const token = localStorage.getItem("token");

  console.log("GetPostDetail");
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
