import { SET_SCREEN_LOADING } from "./constants";

const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SCREEN_LOADING:
      return {
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
}
