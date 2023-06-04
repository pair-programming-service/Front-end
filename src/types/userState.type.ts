export interface Board {
  title: string;
  content: string;
  category: string;
}

export interface UserState {
  boardList?: Board[] | null;
  loginSuccess?: boolean;
  createdAt: string;
  email?: string;
  githubLink: string | null;
  id: number;
  nickname: string;
  profileImage: string | null;
}
