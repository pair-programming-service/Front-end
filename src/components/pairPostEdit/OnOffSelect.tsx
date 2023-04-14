import { useRecoilState } from "recoil";
import { onOffSelect } from "state/atoms/editOptionAtom";
import { onOffList } from "types/editOption.type";
import TextSelect from "../common/TextSelect";

const OnOffSelect = () => {
  const [selectedId, setSelectedId] = useRecoilState(onOffSelect);
  return (
    <div>
      <TextSelect
        options={onOffList}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
};

export default OnOffSelect;
