import { PairPost } from "./post.type";

export interface ProfileInfo {
  nickname: string;
  profileImage: string | null;
  githubLink: string | null;
  postList: PairPost[];
}
