import { atom } from "recoil";

interface IUserInfoState {
  id?: number;
  isJoined?: boolean;
  joined?: boolean;
  name?: string;
  profileImage?: string;
  role?: string;
}

export const userInfoState = atom<IUserInfoState>({
  key: "userInfo",
  default: {
    id: 0,
    isJoined: false,
    joined: false,
    name: "",
    profileImage: "",
    role: "",
  },
});
