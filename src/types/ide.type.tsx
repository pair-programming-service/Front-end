import RoundImage from "components/common/RoundImage";
import { ReactElement } from "react";
import IntelliJSVG from "../assets/images/ides/intellij.svg";
import VSCodeSVG from "../assets/images/ides/vscode.svg";

export interface IDE {
  id: number;
  name: string;
  icon: ReactElement;
}

export const ideList: IDE[] = [
  {
    id: 0,
    name: "IntelliJ",
    icon: <RoundImage src={IntelliJSVG} />,
  },
  {
    id: 1,
    name: "VSCode",
    icon: <RoundImage src={VSCodeSVG} />,
  },
];
