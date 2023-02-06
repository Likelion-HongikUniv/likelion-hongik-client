import { IAuthor } from "./post";

export interface IBoard {
  postId: number;
  author: IAuthor;
  title: string;
  body: string;
  createdTime: string;
  isLiked: boolean;
  likeCount: number;
  comments: IComment[];
  imageUrls?: string[];
}
export interface IComment {
  commentId: number;
  author: IAuthor;
  body?: string;
  isDeleted: boolean;
  createdTime: string;
  isLiked: boolean;
  likeCount: number;
  replies?: IReply[];
}

export interface IReply {
  replyId: number;
  author: IAuthor;
  body?: string;
  createdTime?: string;
  isDeleted?: boolean;
  isLiked: boolean;
  likeCount: number;
  deleted?: boolean;
}
