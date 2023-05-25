import request from "./base";

export const getProfileInfo = (nickname: string) => {
  return request({
    url: `/member/detail/${nickname}`,
  });
};
