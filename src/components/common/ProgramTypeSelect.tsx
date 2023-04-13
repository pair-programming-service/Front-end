import { useState } from "react";
import { programmingList } from "types/programming.type";
import RoundButton from "./RoundButton";

const ProgramTypeSelect = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="flex gap-2">
      {programmingList.map((programming) => (
        <RoundButton
          key={programming.id}
          programming={programming}
          isSelected={selectedId === programming.id}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default ProgramTypeSelect;
