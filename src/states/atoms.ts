// 상태 관리

import { atom, atomFamily, selectorFamily } from "recoil";
import { IBoard, IComment } from "../interfaces/comments";
import { ICategory } from "../interfaces/category";
import { IPost } from "../interfaces/post";
import { IPagination } from "../interfaces/post";

export const commentsListState = atom<IComment[]>({
  key: "commentsState",
  default: [
    {
      "commentId": 23,
      "author": {
        "authorId": 1,
        "nickname": "김스르으응ㄹ기",
        "profileImage": "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        "isAuthor": true
      },
      "body": "댓글 1번쨰",
      "isDeleted": false,
      "createdTime": "2023-01-17T17:32:54.597232",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 24,
      "author": {
        "authorId": 1,
        "nickname": "김스르으응ㄹ기",
        "profileImage": "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        "isAuthor": true
      },
      "body": "댓글 2번쨰",
      "isDeleted": false,
      "createdTime": "2023-01-17T17:40:41.041311",
      "isLiked": null,
      "likeCount": 0,
      "replies": [
        {
          "replyId": 25,
          "author": {
            "authorId": 1,
            "nickname": "김스르으응ㄹ기",
            "profileImage": "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
            "isAuthor": true
          },
          "body": "대댓글 1번쨰",
          "createdTime": "2023-01-17T17:41:04.001386",
          "isLiked": false,
          "likeCount": 0,
          "deleted": false
        }
      ]
    },
    {
      "commentId": 26,
      "author": {
        "authorId": 1,
        "nickname": "김스르으응ㄹ기",
        "profileImage": "https://lh3.googleusercontent.com/a/AEdFTp69-b0CJAMsVpp7Qy3awOPqG8gvK2xT6ysPZaKVXw=s96-c",
        "isAuthor": true
      },
      "body": "대댓글 1번쨰",
      "isDeleted": true,
      "createdTime": "2023-01-17T17:41:23.343214",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 27,
      "author": {
        "authorId": 2,
        "nickname": "꽃게",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "으쌰으쌰",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 28,
      "author": {
        "authorId": 2,
        "nickname": "꽃게",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "구글폼 미쳤다",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 29,
      "author": {
        "authorId": 3,
        "nickname": "지직직직지지직",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "싸늘하다.. 가슴에 비수가 날아와 꽂힌다",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 30,
      "author": {
        "authorId": 3,
        "nickname": "지직직직지지직",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "아귀한텐 밑에서 한텐 밑에서 한장",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 32,
      "author": {
        "authorId": 3,
        "nickname": "지직직직지지직",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "동작 그만 밑장빼기냐?",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    },
    {
      "commentId": 34,
      "author": {
        "authorId": 4,
        "nickname": "꽃게",
        "profileImage": "1",
        "isAuthor": false
      },
      "body": "사쿠라네? 사쿠라야?",
      "isDeleted": false,
      "createdTime": "2023-01-18T00:00:00",
      "isLiked": null,
      "likeCount": 0,
      "replies": []
    }
  ],
});

export const boardState = atom<IBoard>({
  key: "boardState",
  default: {
    "postId": 17,
    "author": {
      "authorId": 1,
      "nickname": "김스르으응ㄹ기",
      "profileImage": "",
      "isAuthor": true
    },
    "title": "게시문 5번쨰",
    "body": "게시물 5번쨰",
    "createdTime": "2023-01-17T04:14:10.997966",
    "isLiked": true,
    "likeCount": 1,
    "comments": [],
    "imageUrls": [],
  }
})

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
