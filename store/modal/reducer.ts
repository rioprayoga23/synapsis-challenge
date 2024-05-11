import { CLEAR_MODAL, SET_MODAL } from "./constants";

const initialState = {
  isOpen: false,
  modalAction: "",
  isLoading: false,
  data: {},
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MODAL:
      return {
        isOpen: true,
        modalAction: action.modalAction,
        isLoading: true,
        data: action.data,
      };
    case CLEAR_MODAL:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
