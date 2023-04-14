import React from "react";
import { FilterOption } from "types/filter.type";
import { Programming } from "types/programming.type";

const RoundButton = ({
  option,
  isSelected,
  setSelectedId,
}: {
  option: Programming | FilterOption;
  isSelected: boolean;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleSelect = () => {
    setSelectedId(option.id);
  };
  return (
    <button
      className={`${
        isSelected && "bg-cm-200 border-cm-300"
      } h-10 px-4 rounded-full border shadow-md shadow-gray-400`}
      onClick={handleSelect}
    >
      {option.name}
    </button>
  );
};

export default RoundButton;
