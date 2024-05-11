import { HYDRATE } from "next-redux-wrapper";
import { SET_META } from "./constants";

const initialState = {
  data: {},
};

export default function reducer(state = initialState, action: any) {
  if (action.type === HYDRATE) {
    return {
      data: action.payload.meta.data,
    };
  } else {
    switch (action.type) {
      case SET_META:
        return {
          data: action.data,
        };

      default:
        return state;
    }
  }
}
