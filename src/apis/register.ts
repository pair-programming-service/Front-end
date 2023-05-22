import { SignupData } from "types/signup.type";
import request from "./base";

export const signup = (data: SignupData) => {
  return request({
    method: "POST",
    url: `/member/signup`,
    data,
  });
};

export const getMyPageInfo = () => {
  return request({
    url: `/member/detail`,
  });
};

export const uploadMyPageInfo = (
  image: File | null,
  nickname: string,
  githubLink: string
) => {
  const formData = new FormData();
  formData.append("image", image || "");
  const blob = new Blob(
    [
      JSON.stringify({
        nickname,
        githubLink,
      }),
    ],
    { type: "application/json" }
  );

  formData.append("requestDto", blob);

  return request({
    method: "PUT",
    url: `/member/update`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
