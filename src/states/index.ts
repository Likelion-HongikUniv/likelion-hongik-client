// 상태 관리

import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UploadImage } from "../components/myPage/FileUploader";

const { persistAtom } = recoilPersist();

export const userState = atom<any>({
  key: "userState",
  default: {
    major: "",
    nickname: "",
    part: "",
    profileImageSrc: "",
    role: "",
    studentId: "",
    team: null,
    userId: 0,
    username: "",
  },
});

export const btnActiveState = atom<number>({
  key: "btnActiveState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const profileState = atom<UploadImage | null>({
  key: "profileState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const profileImgState = atom<string>({
  key: "profileImgState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

interface IEdit {
  key?: string;
  major?: string;
  profile?: UploadImage | null;
  part?: string;
  nickname?: string;
  studentId?: string;
}

export const editState = atom<IEdit>({
  key: "edit",
  default: {
    major: "컴퓨터공학과",
    part: "기획/디자인",
    nickname: "건뺑이",
    studentId: "C111111",
  },
  effects_UNSTABLE: [persistAtom],
});

export const teamState = atom<string>({
  key: "teamState",
  default: "건빵이최고",
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
});

export const isCancelButtonClickedState = atom<boolean>({
  key: " isCancelButtonClickedState",
  default: false,
});

export const isThumbnailSetButtonClickedState = atom<boolean>({
  key: "isThumbnailSetButtonClickedState",
  default: false,
});

export const postThumbnailUrlState = atom<string>({
  key: "postThumbnailUrlState",
  default: "",
});

export const currPageState = atom<number>({
  key: "currPageState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const NickMulState = atom<boolean>({
  key: "nickCheck",
  default: false,
});

export const mulBtnState = atom<boolean>({
  key: "mulBtnState",
  default: false,
});
