import LanguageSelect from "components/common/LanguageSelect";
import ProgramTypeSelect from "components/common/ProgramTypeSelect";
import { ReactElement } from "react";

export interface FilterOption {
  optionNum: number;
  optionName: string;
  selectComponent: ReactElement;
}

export const optionList: FilterOption[] = [
  {
    optionNum: 0,
    optionName: "언어 및 프레임워크",
    selectComponent: <LanguageSelect />,
  },
  {
    optionNum: 1,
    optionName: "프로그래밍 유형",
    selectComponent: <ProgramTypeSelect />,
  },
];
