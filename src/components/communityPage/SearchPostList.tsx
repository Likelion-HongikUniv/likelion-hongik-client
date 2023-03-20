import styled from "styled-components";
import { PostItem } from "./PostItem";
import { IPost } from "../../interfaces/post";
import axios from "axios";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { paginationState, postsListState, pageState, searchState } from "../../states/atoms";
import { IPagination } from "../../interfaces/post";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = "https://www.hongiklikelion.click";

export function SearchPostList(params: any) {
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsListState);
  const setPagination = useSetRecoilState<IPagination>(paginationState);
  const navigate = useNavigate();

  const page = useRecoilValue<number>(pageState);
  const search = useRecoilValue<string>(searchState);
  console.log(params.tag);

  function GetSearchPostList(category: string, tag: string, page: number, search: string) {
    const params = { search: search, page: page };
    const token = localStorage.getItem("token");

    axios
      .get(`${baseURL}/community/posts/${category}/${tag}/`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
        params,
      })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          setPagination({
            totalPage: response.data.totalPage,
            totalElements: response.data.totalElements,
            pagingSize: response.data.pagingSize,
            currentPage: response.data.currentPage,
            isEmpty: response.data.isEmpty,
            isFirst: response.data.isFirst,
            isLast: response.data.isLast,
          });
          setPostsData(response.data.data);
          return response.data;
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 500) {
          if (category === "PROJECT") {
            alert("팀 빌딩 후 이용 가능합니다🦁");
            // navigate("/community/BOARD");
            return;
          } else {
            alert("로그인 후 이용해주세요🦁");
          }
        }
        if (err.response.status === 404) {
          alert("게시글을 찾을 수 없습니다.");
        }
        // window.location.href = "/";
        // throw err;
      });
  }

  useEffect(() => {
    GetSearchPostList(params.categoryName, params.tag.key, page, search);
  }, [params.categoryName, params.tag.key, page]);

  const posts = Object.values(postsData).map((posts: IPost) => posts);
  return (
    <List>
      {posts.map((post: IPost, index) => {
        return <PostItem {...post} key={index} />;
      })}
    </List>
  );
}

const List = styled.div`
  width: 100%;
`;
