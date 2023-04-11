import { ReactElement } from "react";
import JavaScriptSvg from "../assets/images/languages/javascript.svg";

export interface Language {
  name: string;
  icon: ReactElement;
}

export type LanguageList = {
  javascript: Language;
};

export const languageList: LanguageList = {
  javascript: {
    name: "javascript",
    icon: <img src={JavaScriptSvg} />,
  } as Language,
};
