import { atom } from "recoil";

export interface IUserInfoState {
  userId?: number;
  isJoined?: boolean;
  joined?: boolean;
  username?: string;
  profileImageSrc?: string;
  role?: string;
  accessToken?: string;
  refreshToken?: string;
}

export const userInfoState = atom<IUserInfoState>({
  key: "userInfo",
  default: {
    userId: 0,
    isJoined: false,
    joined: false,
    username: "",
    profileImageSrc: "",
    role: "",
    accessToken: "",
    refreshToken: "",
  },
});
