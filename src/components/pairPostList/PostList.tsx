import PostCard from "components/common/PostCard";
import { languageList } from "types/language.type";

const PostList = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
      <PostCard
        languages={[
          languageList.language[0],
          languageList.language[1],
          languageList.language[1],
          languageList.language[1],
          languageList.language[1],
        ]}
      />
      <PostCard
        languages={[languageList.language[0], languageList.language[1]]}
      />
      <PostCard
        languages={[languageList.language[0], languageList.language[1]]}
      />
      <PostCard
        languages={[languageList.language[0], languageList.language[1]]}
      />
      <PostCard
        languages={[languageList.language[0], languageList.language[1]]}
      />
    </div>
  );
};

export default PostList;
