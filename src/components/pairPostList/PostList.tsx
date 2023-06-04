import PostCard from "components/common/PostCard";
import { PairPost } from "types/post.type";

const PostList = ({
  postList,
}: {
  postList: PairPost[] | null | undefined;
}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
      {postList?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
