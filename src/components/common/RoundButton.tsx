import React from "react";
import { Programming } from "types/programming.type";

const RoundButton = ({
  programming,
  isSelected,
  setSelectedId,
}: {
  programming: Programming;
  isSelected: boolean;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleSelect = () => {
    setSelectedId(programming.id);
  };
  return (
    <button
      className={`${
        isSelected && "bg-cm-200 border-cm-300"
      } h-10 px-4 rounded-full border shadow-md shadow-gray-400`}
      onClick={handleSelect}
    >
      {programming.name}
    </button>
  );
};

export default RoundButton;
