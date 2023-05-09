import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { languageList } from "types/language.type";
import { PairPost } from "types/post.type";
import LanguageIcon from "./LanguageIcon";
import Tag from "./Tag";

const PostCard = ({ post }: { post: PairPost }) => {
  const navigate = useNavigate();
  const [languages] = useState(
    languageList.filter((lan) => post.language.includes(lan.name))
  );
  const handleMoveDetail = () => {
    navigate(`/pairpostdetail/${post.id}`);
  };
  return (
    <div
      className="w-full border rounded-xl p-6 cursor-pointer"
      onClick={handleMoveDetail}
    >
      <div className="">
        <div className="flex justify-center mb-3">
          {languages.length > 0 ? (
            languages.map((lan, idx) => (
              <LanguageIcon
                key={lan.id}
                language={lan}
                zIndex={`z-[${5 - idx}]`}
              />
            ))
          ) : (
            <div className="h-14"></div>
          )}
        </div>
        <hr className="relative top-[-40px] mx-[-24px]" />
      </div>
      <h1 className="font-bold mb-3">{post.title}</h1>
      <div className="flex items-center w-full justify-between">
        <div className="text-sm">{post.createdAt?.slice(0, 10)}</div>
        <Tag text={post.category} />
      </div>
    </div>
  );
};

export default PostCard;
