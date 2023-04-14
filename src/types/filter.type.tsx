import LanguageSelect from "components/common/LanguageSelect";
import ProgramTypeSelect from "components/common/ProgramTypeSelect";
import { ReactElement } from "react";

export interface FilterOption {
  id: number;
  name: string;
  selectComponent: ReactElement;
}

export const optionList: FilterOption[] = [
  {
    id: 0,
    name: "언어 및 프레임워크",
    selectComponent: <LanguageSelect />,
  },
  {
    id: 1,
    name: "프로그래밍 유형",
    selectComponent: <ProgramTypeSelect />,
  },
];
