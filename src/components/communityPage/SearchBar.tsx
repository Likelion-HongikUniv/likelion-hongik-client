import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { useState } from "react";
import axios from "axios";
import { ICommunityParam, ITag } from "../../interfaces/category";
import { nowTagState, pageState, paginationState, postsListState, searchState } from "../../states/atoms";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { IPost, IPagination } from "../../interfaces/post";

const baseURL = "http://13.125.72.138:8080";

export function SearchBar(categoryName: ICommunityParam) {
  const nowTag = useRecoilValue<ITag>(nowTagState);
  const [search, setSearch] = useRecoilState<string>(searchState);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const [postsData, setPostsData] = useRecoilState<IPost[]>(postsListState);
  const page = useRecoilValue<number>(pageState);
  const setPagination = useSetRecoilState<IPagination>(paginationState);

  function GetSearchList(category: string, tag: string, search: string) {
    const params = { search: search, page: page };
    const token = localStorage.getItem("token");
    axios
      .get(`${baseURL}/community/posts/${category}/${tag}/search/`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
        params,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
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
          alert("로그인 후 이용해주세요🦁");
        }
        if (err.response.status === 404) {
          alert("게시글을 찾을 수 없습니다.");
        }
        // window.location.href = "/";
        throw err;
      });
  }

  const onSubmitHandler = () => {
    GetSearchList(categoryName.categoryName, nowTag.key, search);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmitHandler();
    }
  };
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      ></input>
      <button type="button" onClick={onSubmitHandler}>
        검색
      </button>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  input {
    width: 100%;
    height: 60px;
    background: rgba(51, 51, 51, 0.6);
    border-radius: 8px;
    border: none;
    color: ${WHITE_1};
    font-weight: 500;
    padding: 19px 16px;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 126px;
    height: 60px;
    line-height: 22px;
    border-radius: 8px;
    letter-spacing: -0px;
    font-size: 20px;
    background: #e9e9e9;
    font-weight: 600;
    text-align: center;
    color: ${BLACK_1};
    border: none;
  }
  @media all and (max-width: 767px) {
    margin-top: 16px;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    input {
      width: 100%;
      height: 48px;
      font-size: 14px;
      border-radius: 8px;
      padding: 15px 12px;
    }
    button {
      width: 100%;
      height: 40px;
      font-size: 16px;
      line-height: 19px;
      border-radius: 8px;
    }
  }
`;
