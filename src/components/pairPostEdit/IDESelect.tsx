import IDEButton from "components/common/IDEButton";
import { useRecoilState } from "recoil";
import { ideSelect } from "state/atoms/editOptionAtom";
import { IDE } from "types/ide.type";

const IDESelect = ({ optionType }: { optionType: IDE[] }) => {
  const [selectedId, setSelectedId] = useRecoilState(ideSelect);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {optionType.map((option) => (
          <IDEButton
            key={option.id}
            option={option}
            isSelected={selectedId === option.id}
            setSelected={setSelectedId}
            selected={selectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default IDESelect;
