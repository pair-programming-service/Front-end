import { PairPost } from "types/post.type";
import request from "./base";

export const getPairPostList = (
  page: number,
  size: number,
  searchValue: string,
  filteredLanNames: string[],
  category?: string,
  status?: boolean
) => {
  const languageQuery =
    filteredLanNames.length > 0
      ? filteredLanNames.map((el) => el + "=true").join("&")
      : "";
  const categoryQuery = encodeURI(category ? category : "");
  const statusQuery = status ? "true" : "false";
  return request({
    url: `/board/all?page=${page}&size=${size}&search=${searchValue}&${languageQuery}&category=${categoryQuery}&status=${statusQuery}`,
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

export const deletePairPost = (id: number) => {
  return request({
    method: "DELETE",
    url: `/board/${id}`,
  });
};
