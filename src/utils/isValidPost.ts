import { PairPost } from "types/post.type";

export const isValidPost = (post: PairPost) => {
  if (
    post.title.length === 0 ||
    post.language.length === 0 ||
    post.content.length === 0 ||
    !post.category ||
    !post.ide ||
    !post.runningTime ||
    !post.proceed
  )
    return false;

  return true;
};
