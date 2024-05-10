import { CLEAR_POSTS_DATA, SET_POSTS_DATA } from "./constants";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_POSTS_DATA:
      return {
        data: action.data,
      };
    case CLEAR_POSTS_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
