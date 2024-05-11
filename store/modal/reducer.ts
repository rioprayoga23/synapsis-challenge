import { CLEAR_MODAL, SET_MODAL } from "./constants";

const initialState = {
  isOpen: false,
  modalAction: "",
  data: {},
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MODAL:
      return {
        isOpen: true,
        modalAction: action.modalAction,
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
