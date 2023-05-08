import { atom } from "recoil";
import { languageList } from "types/language.type";

export const languageFilter = atom({
  key: "languageFilter",
  default: new Array(languageList.length).fill(false),
});

export const programTypeFilter = atom({
  key: "programTypeFilter",
  default: -1,
});
