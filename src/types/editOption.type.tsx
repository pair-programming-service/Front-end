import DurationSelect from "components/pairPostEdit/DurationSelect";
import IDESelect from "components/pairPostEdit/IDESelect";
import OnOffSelect from "components/pairPostEdit/OnOffSelect";
import StartDateSelect from "components/pairPostEdit/StartDateSelect";
import { FilterOption, optionList } from "./filter.type";
import { ideList } from "./ide.type";

export interface OnOff {
  id: number;
  name: string;
}

export const onOffList: OnOff[] = [
  {
    id: 0,
    name: "온라인",
  },
  {
    id: 1,
    name: "오프라인",
  },
];

export interface Duration {
  id: number;
  name: string;
}

export const durationList: Duration[] = [
  {
    id: 0,
    name: "하루 미만",
  },
  {
    id: 1,
    name: "1~7일",
  },
  {
    id: 2,
    name: "1주~1개월",
  },
  {
    id: 3,
    name: "1개월 이상",
  },
];

export const editOptionList: FilterOption[] = [
  ...optionList,
  {
    id: 2,
    name: "진행 방식",
    selectComponent: <OnOffSelect />,
  },
  {
    id: 3,
    name: "개발 도구",
    selectComponent: <IDESelect optionType={ideList} />,
  },
  {
    id: 4,
    name: "진행 기간",
    selectComponent: <DurationSelect />,
  },
  {
    id: 5,
    name: "시작 예정일",
    selectComponent: <StartDateSelect />,
  },
];
