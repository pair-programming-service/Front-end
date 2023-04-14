import { OnOff } from "types/editOption.type";
import { Programming } from "types/programming.type";
import RoundButton from "./RoundButton";

const TextSelect = ({
  options,
  selectedId,
  setSelectedId,
}: {
  options: Programming[] | OnOff[];
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <RoundButton
          key={option.id}
          option={option}
          isSelected={selectedId === option.id}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default TextSelect;
