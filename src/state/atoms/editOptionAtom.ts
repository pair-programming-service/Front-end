import { atom } from "recoil";
import { languageList } from "types/language.type";

export const languageSelect = atom({
  key: "languageSelect",
  default: new Array(languageList.language.length).fill(false),
});

export const frameworkSelect = atom({
  key: "frameworkSelect",
  default: new Array(languageList.framework.length).fill(false),
});

export const programTypeSelect = atom({
  key: "programTypeSelect",
  default: 0,
});

export const onOffSelect = atom({
  key: "onOffSelect",
  default: 0,
});

export const ideSelect = atom({
  key: "ideSelect",
  default: -1,
});

export const durationSelect = atom({
  key: "durationSelect",
  default: 0,
});

export const startDateSelect = atom({
  key: "startDateSelect",
  default: new Date().toISOString().slice(0, 10),
});
