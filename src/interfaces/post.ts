export interface IPost {
  postId: string;
  title: string;
  author: IAuthor;
  body: string;
  thumbNailUrl: string;
  likeCount: number;
  commentCount: number;
  createdTime: string;
}

export interface IAuthor {
  authorId: number;
  nickname: string;
  profileImage?: string;
  isAuthor: boolean;
}

export interface IPostList {
  postsData: IPost;
}
