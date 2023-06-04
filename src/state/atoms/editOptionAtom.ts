import { atom } from "recoil";
import { languageList } from "types/language.type";

export const languageSelect = atom({
  key: "languageSelect",
  default: new Array(languageList.length).fill(false),
});

export const programTypeSelect = atom({
  key: "programTypeSelect",
  default: -1,
});

export const onOffSelect = atom({
  key: "onOffSelect",
  default: -1,
});

export const ideSelect = atom({
  key: "ideSelect",
  default: -1,
});

export const durationSelect = atom({
  key: "durationSelect",
  default: -1,
});

export const startDateSelect = atom({
  key: "startDateSelect",
  default: new Date().toISOString().slice(0, 10),
});

export const statusSelect = atom({
  key: "statusSelect",
  default: true,
});
