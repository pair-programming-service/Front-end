import { LanguageList, languageList } from "../../types/language.type";

const LanguageIcon = ({ language }: { language: string }) => {
  const src = languageList[language as keyof LanguageList].icon;
  return (
    <div className="w-14 h-14 rounded-full border overflow-hidden">{src}</div>
  );
};

export default LanguageIcon;
