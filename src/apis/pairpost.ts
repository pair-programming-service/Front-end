import { PairPost } from "types/post.type";
import request from "./base";

export const getPairPostList = (
  page: number,
  size: number,
  searchValue: string,
  filteredLanNames: string[]
) => {
  return request({
    url: `/board/all?page=${page}&size=${size}&search=${searchValue}&${
      filteredLanNames.length > 0
        ? filteredLanNames.map((el) => el + "=true").join("&")
        : ""
    }`,
  });
};

export const getPairPost = (id: number) => {
  return request({
    url: `/board/detail/${id}`,
  });
};

export const postPairPost = (data: PairPost) => {
  return request({
    method: "POST",
    url: `/board`,
    data,
  });
};

export const editPairPost = (data: PairPost, id: number) => {
  return request({
    method: "PUT",
    url: `/board/${id}`,
    data,
  });
};
