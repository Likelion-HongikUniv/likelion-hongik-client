export interface IPostList extends IPagination {
  totalPage: number;
  totalElements: number;
  pagingSize: number;
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
  isEmpty: boolean;
  data: IPost[];
}

export interface IPost {
  postId: number;
  title: string;
  author: IAuthor;
  body: string;
  thumbNailImage?: string | null | undefined;
  likeCount?: number;
  commentCount?: number;
  createdTime?: string;
}

export interface IAuthor {
  authorId: number;
  nickname?: string | null | undefined;
  profileImage?: string | null | undefined;
  isAuthor: boolean;
}

export interface IPagination {
  totalPage: number;
  totalElements: number;
  pagingSize: number;
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
  isEmpty: boolean;
}
