import { SET_SCREEN_LOADING } from "./constants";

export const setScreenLoading = (isLoading: boolean) => {
  return {
    type: SET_SCREEN_LOADING,
    isLoading,
  };
};
