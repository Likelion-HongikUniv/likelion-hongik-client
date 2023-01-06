// interface 관리

export interface IReply {
  key: string;
  id: number;
  body?: string;
  created?: number;
}

export interface ReplyLike extends Comment {
  likes: number;
}