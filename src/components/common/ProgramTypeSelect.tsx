import { useRecoilState } from "recoil";
import { programTypeSelect } from "state/atoms/editOptionAtom";
import { programmingList } from "types/programming.type";
import TextSelect from "./TextSelect";

const ProgramTypeSelect = () => {
  const [selectedId, setSelectedId] = useRecoilState(programTypeSelect);

  return (
    <TextSelect
      options={programmingList}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );
};

export default ProgramTypeSelect;
