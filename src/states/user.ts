import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export interface IUserInfoState {
  userId: number;
  profileImageSrc: string;
  username: string;
  accessToken: string | null;
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
