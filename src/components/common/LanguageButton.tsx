import React, { SetStateAction } from "react";
import { Language } from "types/language.type";

const LanguageButton = ({
  language,
  isSelected,
  selectedArr,
  setSelectedArr,
}: {
  language: Language;
  isSelected: boolean;
  selectedArr: boolean[];
  setSelectedArr: React.Dispatch<SetStateAction<Array<boolean>>>;
}) => {
  const src = language.icon;
  const handleSelect = () => {
    const newSelected = selectedArr.slice();
    newSelected[language.id] = !newSelected[language.id];
    setSelectedArr(newSelected);
  };
  return (
    <button
      className={`${
        isSelected ? "w-16 h-16" : "w-14 h-14 opacity-50"
      } rounded-full overflow-hidden shadow-md shadow-gray-400`}
      onClick={handleSelect}
    >
      {src}
    </button>
  );
};

export default LanguageButton;
