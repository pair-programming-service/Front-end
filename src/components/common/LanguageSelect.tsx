import { useRecoilState } from "recoil";
import { languageSelect } from "state/atoms/editOptionAtom";
import { languageFilter } from "state/atoms/filterOptionAtom";
import { languageList } from "types/language.type";
import ImageButton from "./ImageButton";

const LanguageSelect = ({ isEdit }: { isEdit: boolean }) => {
  const [lanSelectedArr, setLanSelectedArr] = useRecoilState(languageSelect);
  const [lanFilteredArr, setLanFilteredArr] = useRecoilState(languageFilter);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {languageList.map((language) => (
          <ImageButton
            key={language.id}
            option={language}
            isSelected={
              isEdit ? lanSelectedArr[language.id] : lanFilteredArr[language.id]
            }
            setSelectedArr={isEdit ? setLanSelectedArr : setLanFilteredArr}
            selectedArr={isEdit ? lanSelectedArr : lanFilteredArr}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
