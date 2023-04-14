import { SetterOrUpdater } from "recoil";
import { Language } from "types/language.type";

const IDEButton = ({
  option,
  isSelected,
  setSelected,
}: {
  option: Language;
  isSelected: boolean;
  selected: boolean[] | number;
  setSelected: SetterOrUpdater<number>;
}) => {
  const src = option.icon;
  const handleSelect = () => {
    setSelected(option.id);
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

export default IDEButton;
