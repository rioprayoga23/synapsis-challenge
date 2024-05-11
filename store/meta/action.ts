import { SET_META } from "./constants";

export const setMetaData = (data: any) => {
  return {
    type: SET_META,
    data,
  };
};
