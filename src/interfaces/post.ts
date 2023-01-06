// interface 관리

export interface IPost {
  key: string;
  id: number;
  title?: string;
  body?: string;
  category?: string;
  created?: number;
}

/** 포스트 좋아요 기능
 * Like 테이블 안에, Post에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */


export interface PostLike extends IPost {
  likes: number;
}