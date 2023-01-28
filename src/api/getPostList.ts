import axios from "axios";
import { IPost, IPagination, IPostList } from "../interfaces/post";
import { useSetRecoilState } from "recoil";
import { postsListState, paginationState } from "../states/atoms";

const baseURL = "";

interface postsProps {
  category?: string;
  tag?: string;
  page?: number;
}

const GetPostList = async ({ category, tag, page }: postsProps) => {
  const setPostsData = useSetRecoilState<IPost[]>(postsListState);
  const setPagenation = useSetRecoilState<IPagination>(paginationState);
  await axios
    .get<IPostList>(`${baseURL}community/${category}/${tag}/?page=${page}`)
    .then((response) => {
      setPagenation({
        totalPage: response.data.totalPage,
        totalElements: response.data.totalElements,
        pagingSize: response.data.pagingSize,
        currentPage: response.data.currentPage,
        isFirst: response.data.isFirst,
        isLast: response.data.isLast,
        isEmpty: response.data.isEmpty,
      });
      setPostsData(response.data.data);
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export default GetPostList;
