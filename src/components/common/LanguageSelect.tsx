import { useState } from "react";
import { languageList } from "types/language.type";
import LanguageButton from "./LanguageButton";

const LanguageSelect = () => {
  const [lanSelectedArr, setLanSelectedArr] = useState(
    new Array(languageList.language.length).fill(false)
  );
  const [frameSelectedArr, setFrameSelectedArr] = useState(
    new Array(languageList.language.length).fill(false)
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {languageList.language.map((language) => (
          <LanguageButton
            key={language.id}
            language={language}
            isSelected={lanSelectedArr[language.id]}
            setSelectedArr={setLanSelectedArr}
            selectedArr={lanSelectedArr}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        {languageList.framework.map((language) => (
          <LanguageButton
            key={language.id}
            language={language}
            isSelected={frameSelectedArr[language.id]}
            setSelectedArr={setFrameSelectedArr}
            selectedArr={frameSelectedArr}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSelect;
