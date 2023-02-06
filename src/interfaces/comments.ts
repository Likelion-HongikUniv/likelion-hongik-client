import { IAuthor } from "./post";

export interface IBoard {
  postId: number;
  author: IAuthor;
  title: string;
  body: string;
  createdTime: string;
  isLiked?: boolean | null;
  likeCount: number;
  comments: IComment[];
  imageUrls?: string[];
}
export interface IComment {
  commentId: number;
  author?: IAuthor;
  body?: string;
  isDeleted?: boolean;
  createdTime?: string;
  isLiked?: boolean | null;
  likeCount: number;
  replies?: IReply[];
}

export interface IReply {
  commentId: number;
  replyId: number;
  author?: IAuthor;
  body?: string;
  createdTime?: string;
  isDeleted?: boolean;
  isLiked?: boolean;
  likeCount: number;
  deleted?: boolean;
}
