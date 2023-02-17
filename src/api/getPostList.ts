import axios from "axios";
import { IPost, IPagination, IPostList } from "../interfaces/post";
import { useSetRecoilState } from "recoil";
import { postsListState, paginationState } from "../states/atoms";

const baseURL = "http://13.125.72.138:8080";

interface postsProps {
  category?: string;
  tag?: string;
  page?: number;
}

const GetPostList = async ({ category, tag, page }: postsProps) => {
  const token = localStorage.getItem("token");
  console.log(category, tag, page);
  try {
    const response = await axios.get<IPostList>(`${baseURL}/community/posts/${category}/${tag}/?page=${page}`, {
      headers: {
        "Content-Type": `application/json`,
        JWT: token,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw err;
  }
};

export default GetPostList;
