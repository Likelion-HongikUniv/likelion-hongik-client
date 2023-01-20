import { atom } from "recoil";

interface IUserInfoState {
  userId: number;
  profileImageSrc: string;
  username: string;
  accessToken: string;
}

export const userInfoState = atom<IUserInfoState>({
  key: "userInfo",
  default: {
    userId: 0,
    profileImageSrc: "",
    username: "",
    accessToken: "",
  },
});
