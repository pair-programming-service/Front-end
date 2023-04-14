import { useRecoilState } from "recoil";
import { durationSelect } from "state/atoms/editOptionAtom";
import { durationList } from "types/editOption.type";
import TextSelect from "../common/TextSelect";

const DurationSelect = () => {
  const [selectedId, setSelectedId] = useRecoilState(durationSelect);
  return (
    <div>
      <TextSelect
        options={durationList}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
};

export default DurationSelect;
