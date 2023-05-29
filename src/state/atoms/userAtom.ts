import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userState", // 원하는 key 값 입력
  storage: localStorage,
});

export const userState = atom({
  key: "userState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
