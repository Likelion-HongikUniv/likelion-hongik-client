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
      commentId: 23,
      author: {
        authorId: 1,
        nickname: "",
        profileImage: "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        isAuthor: true,
      },
      body: "댓글 1번쨰",
      isDeleted: false,
      createdTime: "2023-01-17T17:32:54.597232",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 24,
      author: {
        authorId: 1,
        nickname: "김스르으응ㄹ기",
        profileImage: "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        isAuthor: true,
      },
      body: "댓글 2번쨰",
      isDeleted: false,
      createdTime: "2023-01-17T17:40:41.041311",
      isLiked: false,
      likeCount: 0,
      replies: [
        {
          replyId: 25,
          author: {
            authorId: 1,
            nickname: "김스르으응ㄹ기",
            profileImage: "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
            isAuthor: true,
          },
          body: "대댓글 1번쨰",
          createdTime: "2023-01-17T17:41:04.001386",
          isLiked: false,
          likeCount: 0,
          deleted: false,
        },
      ],
    },
    {
      commentId: 26,
      author: {
        authorId: 1,
        nickname: "김스르으응ㄹ기",
        profileImage: "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        isAuthor: true,
      },
      body: "대댓글 1번쨰",
      isDeleted: true,
      createdTime: "2023-01-17T17:41:23.343214",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 27,
      author: {
        authorId: 2,
        nickname: "꽃게",
        profileImage: "1",
        isAuthor: false,
      },
      body: "으쌰으쌰",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 28,
      author: {
        authorId: 2,
        nickname: "꽃게",
        profileImage: "1",
        isAuthor: false,
      },
      body: "구글폼 미쳤다",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 29,
      author: {
        authorId: 3,
        nickname: "지직직직지지직",
        profileImage: "1",
        isAuthor: false,
      },
      body: "싸늘하다.. 가슴에 비수가 날아와 꽂힌다",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 30,
      author: {
        authorId: 3,
        nickname: "지직직직지지직",
        profileImage: "1",
        isAuthor: false,
      },
      body: "아귀한텐 밑에서 한텐 밑에서 한장",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 32,
      author: {
        authorId: 3,
        nickname: "지직직직지지직",
        profileImage: "1",
        isAuthor: false,
      },
      body: "동작 그만 밑장빼기냐?",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
      isLiked: false,
      likeCount: 0,
      replies: [],
    },
    {
      commentId: 34,
      author: {
        authorId: 4,
        nickname: "꽃게",
        profileImage: "1",
        isAuthor: false,
      },
      body: "사쿠라네? 사쿠라야?",
      isDeleted: false,
      createdTime: "2023-01-18T00:00:00",
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
      isAuthor: true,
    },
    title: "",
    body: "",
    createdTime: "",
    isLiked: true,
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
