import { ReactElement } from "react";
import JavaScriptSvg from "../assets/images/languages/javascript.svg";
import NodeJSSvg from "../assets/images/languages/nodejs.svg";
import ReactSVG from "../assets/images/languages/react.svg";
import TypeScriptSvg from "../assets/images/languages/typescript.svg";

export interface Language {
  id: number;
  name: string;
  icon: ReactElement;
}

export type LanguageList = {
  language: Language[];
  framework: Language[];
};

export const languageList: LanguageList = {
  language: [
    {
      id: 0,
      name: "JS",
      icon: <img src={JavaScriptSvg} />,
    } as Language,
    {
      id: 1,
      name: "TS",
      icon: <img src={TypeScriptSvg} />,
    } as Language,
  ],
  framework: [
    {
      id: 0,
      name: "react",
      icon: <img src={ReactSVG} />,
    },
    {
      id: 1,
      name: "nodeJS",
      icon: <img src={NodeJSSvg} />,
    },
  ],
};
