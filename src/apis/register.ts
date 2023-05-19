import { MyPageInfo } from "types/mypage.type";
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

export const uploadMyPageInfo = (data: MyPageInfo) => {
  return request({
    method: "PUT",
    url: `/member/update`,
    data,
  });
};

export const uploadProfileImage = (data: FormData) => {
  return request({
    method: "POST",
    url: `/member/uploadImg`,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
