import { useRecoilState } from "recoil";
import { frameworkSelect, languageSelect } from "state/atoms/editOptionAtom";
import { languageList } from "types/language.type";
import ImageButton from "./ImageButton";

const LanguageSelect = () => {
  const [lanSelectedArr, setLanSelectedArr] = useRecoilState(languageSelect);
  const [frameSelectedArr, setFrameSelectedArr] =
    useRecoilState(frameworkSelect);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {languageList.language.map((language) => (
          <ImageButton
            key={language.id}
            option={language}
            isSelected={lanSelectedArr[language.id]}
            setSelectedArr={setLanSelectedArr}
            selectedArr={lanSelectedArr}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {languageList.framework.map((framework) => (
          <ImageButton
            key={framework.id}
            option={framework}
            isSelected={frameSelectedArr[framework.id]}
            setSelectedArr={setFrameSelectedArr}
            selectedArr={frameSelectedArr}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
