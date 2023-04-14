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
  const isOpen = option.id === openedOptionNum;

  const handleDown = () => {
    setOpenedOptionNum(option.id);
  };

  const handleUp = () => {
    setOpenedOptionNum(-1);
  };

  return (
    <div className="flex flex-col mr-4">
      <div className="flex items-center">
        <div className="text-base font-bold whitespace-nowrap">
          {option.name}
        </div>
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
