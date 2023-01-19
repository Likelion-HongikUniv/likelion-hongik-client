import axios from "axios";
import { IPost } from "../interfaces/post";

const baseURL = "우리 api 주소";

const getPostList = async (category: string, tag: string, page: string) => {
  const { data } = await axios.get<IPost>(`http://43.200.18.111:8080/community/posts/${category}/${tag}/${page}`);
  return data;
};

export default getPostList;
