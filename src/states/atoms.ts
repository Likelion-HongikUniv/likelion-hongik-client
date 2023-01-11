// 상태 관리

import { atom, atomFamily } from 'recoil'; 
import { IComment } from '../components/postPage/Comments';
 

export const commentsListState = atom<IComment[]>({
  key: 'commentsState',
  default: [
  ],
});

export const commentCompleteState = atomFamily<boolean, number>({
  key: "commentCompleteState",
  default: false,
})
