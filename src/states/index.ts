// 상태 관리

import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UploadImage } from "../components/myPage/FileUploader";

const { persistAtom } = recoilPersist();

export const userState = atom<string>({
  key: "userState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const btnActiveState = atom<number>({
  key: "btnActiveState",
  default: 1,
});

// export const nickState = atom<string>({
//   key: "nickname",
//   default: "건뺑이",
// });

// export const majorState = atom<string>({
//   key: "majorState",
//   default: "컴퓨터공학과",
// });

// export const majorState = selector({
//   key: "majorState",
//   get: ({ get }) => {
//     const changeMajor = get(editState);
//     return changeMajor.major;
//   },
// });

export const profileState = atom<UploadImage | null>({
  key: "profileState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const profileImgState = atom<UploadImage | null>({
  key: "profileImgState",
  default: null,
});

// export const partState = atom<string>({
//   key: "partState",
//   default: "",
// });

interface IEdit {
  key?: string;
  major?: string;
  profile?: UploadImage | null;
  part?: string;
  // team?: string;
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
