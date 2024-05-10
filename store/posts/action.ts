import { CLEAR_POSTS_DATA, SET_POSTS_DATA } from "./constants";

export const setPostData = (data: Posts[]) => {
  return {
    type: SET_POSTS_DATA,
    data,
  };
};

export const clearPostData = () => {
  return {
    type: CLEAR_POSTS_DATA,
  };
};
