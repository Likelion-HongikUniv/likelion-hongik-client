import axios from "axios";
import { IPostList } from "../interfaces/post";

const baseURL = "https://api.likelionhongik.com";

interface postsProps {
  category?: string;
  tag?: string;
  page?: number;
}

const GetPostList = async ({ category, tag, page }: postsProps) => {
  const token = localStorage.getItem("token");
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
