import { PairPost } from "types/post.type";

export const isValidPost = (post: PairPost) => {
  if (
    post.title.length === 0 ||
    post.language.length === 0 ||
    post.content.length === 0 ||
    !post.ide
  )
    return false;

  return true;
};
