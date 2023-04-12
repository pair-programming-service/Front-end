import { ReactElement } from "react";
import JavaScriptSvg from "../assets/images/languages/javascript.svg";
import TypeScriptSvg from "../assets/images/languages/typescript.svg";

export interface Language {
  name: string;
  icon: ReactElement;
}

export type LanguageList = {
  language: Language[];
};

export const languageList: LanguageList = {
  language: [
    {
      name: "JS",
      icon: <img src={JavaScriptSvg} />,
    } as Language,
    {
      name: "TS",
      icon: <img src={TypeScriptSvg} />,
    } as Language,
  ],
};
