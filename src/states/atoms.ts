// 상태 관리

import { atom, atomFamily, selectorFamily } from "recoil";
import { IComment } from "../interfaces/comments";
import { ICategory } from "../interfaces/category";
import { IPost } from "../interfaces/post";
import { IPagination } from "../interfaces/post";

export const commentsListState = atom<IComment[]>({
  key: "commentsState",
  default: [],
});

export const commentCompleteState = atomFamily<boolean, number>({
  key: "commentCompleteState",
  default: false,
});

export const tagListState = atom<ICategory[]>({
  key: "tagListState",
  default: [
    {
      key: "post",
      text: "게시판",
      tags: [
        {
          key: "notice",
          text: "공지사항",
        },
        {
          key: "qna",
          text: "Q&A",
        },
        {
          key: "free",
          text: "자유게시판",
        },
      ],
    },
    {
      key: "assignment",
      text: "과제관리",
      tags: [
        {
          key: "front",
          text: "프론트",
        },
        {
          key: "back",
          text: "백엔드",
        },
        {
          key: "pm",
          text: "기획·디자인",
        },
      ],
    },
    {
      key: "project",
      text: "프로젝트",
      tags: [
        {
          key: "front",
          text: "프론트",
        },
        {
          key: "back",
          text: "백엔드",
        },
        {
          key: "pm",
          text: "기획·디자인",
        },
      ],
    },
  ],
});

export const nowTagState = atom<string>({
  key: "nowTagState",
  default: "notice",
});

export const tagListSelector = selectorFamily({
  key: "tagListSelector",
  get:
    (param: string) =>
    ({ get }) => {
      return get(tagListState).filter((tagList) => tagList.key === param);
    },
});

export const postsListState = atom<IPost[]>({
  key: "postsState",
  default: [],
});

export const paginationState = atom<IPagination>({
  key: "paginationState",
  default: {
    totalPage: 3,
    totalElements: 14,
    pagingSize: 5,
    currentPage: 1,
    isFirst: false,
    isLast: false,
    isEmpty: false,
  },
});

export const pageState = atom<number>({
  key: "pageState",
  default: 1,
});
