import { Language } from "types/language.type";
import LanguageIcon from "./LanguageIcon";
import Tag from "./Tag";

const PostCard = ({ languages }: { languages: Language[] }) => {
  const handleMoveDetail = () => {
    // TODO: 상세 페이지 이동
  };
  return (
    <div
      className="w-full border rounded-xl p-6 cursor-pointer"
      onClick={handleMoveDetail}
    >
      <div className="">
        <div className="flex justify-center mb-3">
          {/* {languages.map((language) => (
            <LanguageIcon
              key={language.name}
              language={language}
              // zIndex={`z-${50 - idx * 10}`}
            />
          ))} */}
          <LanguageIcon language={languages[0]} zIndex={"z-50"} />
          <LanguageIcon language={languages[1]} zIndex={"z-40"} />
          <LanguageIcon language={languages[0]} zIndex={"z-30"} />
          <LanguageIcon language={languages[1]} zIndex={"z-20"} />
          <LanguageIcon language={languages[0]} zIndex={"z-10"} />
        </div>
        <hr className="relative top-[-40px] mx-[-24px]" />
      </div>
      <h1 className="font-bold mb-3">
        제목입니다. 페어 모집합니다. 제목은 최대 두 줄입니다.
      </h1>
      <div className="flex w-full justify-between">
        <div>오늘</div>
        <Tag text="알고리즘" />
      </div>
    </div>
  );
};

export default PostCard;
