import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserState } from "types/userState.type";

const { persistAtom } = recoilPersist({
  key: "userState", // 원하는 key 값 입력
  storage: localStorage,
});

export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
