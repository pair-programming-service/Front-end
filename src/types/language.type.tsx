import RoundImage from "components/common/RoundImage";
import { ReactElement } from "react";
import CSvg from "../assets/images/languages/c.svg";
import CppSvg from "../assets/images/languages/cpp.svg";
import CSharpSvg from "../assets/images/languages/csharp.svg";
import JavaSvg from "../assets/images/languages/java.svg";
import JavaScriptSvg from "../assets/images/languages/javascript.svg";
import NodeJSSvg from "../assets/images/languages/nodejs.svg";
import PythonSvg from "../assets/images/languages/python.svg";
import TypeScriptSvg from "../assets/images/languages/typescript.svg";

export interface Language {
  id: number;
  name: string;
  icon: ReactElement;
}

export const languageList: Language[] = [
  {
    id: 0,
    name: "javaScript",
    icon: <RoundImage src={JavaScriptSvg} />,
  } as Language,
  {
    id: 1,
    name: "typeScript",
    icon: <RoundImage src={TypeScriptSvg} />,
  } as Language,
  {
    id: 2,
    name: "nodeJs",
    icon: <RoundImage src={NodeJSSvg} />,
  } as Language,
  {
    id: 3,
    name: "python",
    icon: <RoundImage src={PythonSvg} />,
  } as Language,
  {
    id: 4,
    name: "java",
    icon: <RoundImage src={JavaSvg} />,
  } as Language,
  {
    id: 5,
    name: "cLanguage",
    icon: <RoundImage src={CSvg} />,
  } as Language,
  {
    id: 6,
    name: "cSharp",
    icon: <RoundImage src={CSharpSvg} />,
  } as Language,
  {
    id: 7,
    name: "cPlusPlus",
    icon: <RoundImage src={CppSvg} />,
  } as Language,
];
