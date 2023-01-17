// 상태 관리

import { atom } from 'recoil';
import { IComment } from '../components/postPage/Comments';
import { IReply } from '../components/postPage/Replies';

export const commentsListState = atom<IComment[]>({
  key: 'commentsState',
  default: [
  ],
});

export const replyState = atom<IReply[]>({
  key: 'repliesState',
  default: [
  ],
});