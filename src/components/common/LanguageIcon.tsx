import { Language } from "../../types/language.type";

const LanguageIcon = ({
  language,
  zIndex,
}: {
  language: Language;
  zIndex: string;
}) => {
  const src = language.icon;
  return (
    <div
      className={`relative ${zIndex} w-14 h-14 rounded-full border overflow-hidden -mx-[6px]`}
    >
      {src}
    </div>
  );
};

export default LanguageIcon;
