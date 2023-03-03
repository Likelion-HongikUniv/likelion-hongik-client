// 상태 관리

import { atom, atomFamily, selectorFamily } from "recoil";
import { IBoard, IComment } from "../interfaces/comments";
import { ICategory, ITag } from "../interfaces/category";
import { IPost } from "../interfaces/post";
import { IPagination } from "../interfaces/post";
import { IProjectTeam } from "../interfaces/team";

export const commentsListState = atom<IComment[]>({
  key: "commentsState",
  default: [
    {
      commentId: 1,
      author: {
        authorId: 1,
        nickname: "",
        profileImage: "",
        isAuthor: false,
      },
      body: "",
      isDeleted: true,
      createdTime: "",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
  ],
});

export const boardState = atom<IBoard>({
  key: "boardState",
  default: {
    postId: 1,
    author: {
      authorId: 1,
      nickname: "",
      profileImage: "",
      isAuthor: false,
    },
    title: "",
    body: "",
    createdTime: "",
    isLiked: false,
    likeCount: 0,
    comments: [],
    imageUrls: [],
  },
});

export const commentCompleteState = atomFamily<boolean, number>({
  key: "commentCompleteState",
  default: false,
});

export const tagListState = atom<ICategory[]>({
  key: "tagListState",
  default: [
    {
      key: "BOARD",
      text: "게시판",
      tags: [
        {
          key: "NOTICE",
          text: "공지사항",
        },
        {
          key: "QNA",
          text: "Q&A",
        },
        {
          key: "FREEBOARD",
          text: "자유게시판",
        },
      ],
    },
    {
      key: "HOMEWORK",
      text: "과제관리",
      tags: [
        {
          key: "FRONTEND",
          text: "프론트",
        },
        {
          key: "BACKEND",
          text: "백엔드",
        },
        {
          key: "DESIGN",
          text: "기획·디자인",
        },
      ],
    },
    {
      key: "PROJECT",
      text: "프로젝트",
      tags: [
        {
          key: "FRONTEND",
          text: "프론트",
        },
        {
          key: "BACKEND",
          text: "백엔드",
        },
        {
          key: "DESIGN",
          text: "기획·디자인",
        },
        {
          key: "MEETING",
          text: "프로젝트 회의",
        },
      ],
    },
  ],
});

export const nowTagState = atom<ITag>({
  key: "nowTagState",
  default: { key: "NOTICE", text: "공지사항" },
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
    totalPage: 1,
    totalElements: 0,
    pagingSize: 5,
    currentPage: 1,
    isFirst: false,
    isLast: false,
    isEmpty: true,
  },
});

export const pageState = atom<number>({
  key: "pageState",
  default: 1,
});

export const curPageIndexState = atom<number>({
  key: "curPageIndexState",
  default: 0,
});

export const projectTeamState = atom<IProjectTeam>({
  key: "projectTeamState",
  default: {
    teamId: 2,
    teamName: "낙타",
    memberCount: 5,
    members: [
      {
        userId: 39,
        userName: "이지민",
        profileImage: "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
      },
    ],
  },
});

export const selectModalState = atom<boolean>({
  key: "selectModalState",
  default: false,
});

export const searchState = atom<string>({
  key: "searchState",
  default: "",
});
