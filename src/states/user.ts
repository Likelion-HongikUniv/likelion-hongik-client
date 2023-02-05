import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface IUserInfoState {
  id?: number;
  isJoined?: boolean;
  joined?: boolean;
  name?: string;
  profileImage?: string;
  role?: string;
}
const { persistAtom } = recoilPersist();

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
