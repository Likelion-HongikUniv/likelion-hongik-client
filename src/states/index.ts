// 상태 관리

import { atom } from "recoil";
import { UploadImage } from "../components/myPage/FileUploader";

export const userState = atom<string>({
  key: "userState",
  default: "",
});

export const btnActiveState = atom<number>({
  key: "btnActiveState",
  default: 4,
});

export const nickState = atom<string>({
  key: "nickState",
  default: "건뺑이",
});

export const majorState = atom<string>({
  key: "majorState",
  default: "컴퓨터공학과",
});

export const profileState = atom<UploadImage | null>({
  key: "profileState",
  default: null,
});

export const partState = atom<number>({
  key: "partState",
  default: 1,
});

export const teamState = atom<number>({
  key: "teamState",
  default: 1,
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
});
