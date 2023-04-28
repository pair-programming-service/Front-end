import { useRecoilState } from "recoil";
import { programTypeSelect } from "state/atoms/editOptionAtom";
import { programTypeFilter } from "state/atoms/filterOptionAtom";
import { programmingList } from "types/programming.type";
import TextSelect from "./TextSelect";

const ProgramTypeSelect = ({ isEdit }: { isEdit: boolean }) => {
  const [selectedId, setSelectedId] = useRecoilState(programTypeSelect);
  const [filteredId, setFilteredId] = useRecoilState(programTypeFilter);

  return (
    <TextSelect
      options={programmingList}
      selectedId={isEdit ? selectedId : filteredId}
      setSelectedId={isEdit ? setSelectedId : setFilteredId}
    />
  );
};

export default ProgramTypeSelect;
