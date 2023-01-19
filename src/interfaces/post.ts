export interface IPost {
  postId: number;
  title: string;
  author: IAuthor;
  body: string;
  thumbNailUrl?: string | null | undefined;
  likeCount?: number;
  commentCount?: number;
  createdTime?: string;
}

export interface IAuthor {
  authorId: number;
  nickname: string;
  profileImage?: string | null | undefined;
  isAuthor: boolean;
}
