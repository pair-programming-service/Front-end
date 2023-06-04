import { PairPost } from "./post.type";

export interface UserState {
  boardList?: PairPost[] | null;
  loginSuccess?: boolean;
  createdAt: string;
  email?: string;
  githubLink: string | null;
  id: number;
  nickname: string;
  profileImage: string | null;
}
