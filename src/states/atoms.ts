// 상태 관리

import { atom } from 'recoil';
import { IComment } from '../interfaces/comment';


interface CommentsState {
  [key: string]: IComment[];
}

export const CommentsListState = atom<CommentsState>({
  key: 'commentsState',
  default: {
    key: [],
    id: [],
    body: [],
  },
});
