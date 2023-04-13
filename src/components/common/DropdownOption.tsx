import React, { SetStateAction } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FilterOption } from "types/filter.type";

const DropdownOption = ({
  option,
  openedOptionNum,
  setOpenedOptionNum,
}: {
  option: FilterOption;
  openedOptionNum: number;
  setOpenedOptionNum: React.Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = option.optionNum === openedOptionNum;

  const handleDown = () => {
    setOpenedOptionNum(option.optionNum);
  };

  const handleUp = () => {
    setOpenedOptionNum(-1);
  };

  return (
    <div className="flex flex-col mr-4">
      <div className="flex items-center">
        <div className="text-base font-bold">{option.optionName}</div>
        {isOpen ? (
          <button onClick={handleUp}>
            <BiChevronUp size={24} />
          </button>
        ) : (
          <button onClick={handleDown}>
            <BiChevronDown size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DropdownOption;
