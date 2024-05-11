import { CLEAR_MODAL, SET_MODAL } from "./constants";

export const setModal = ({ modalAction, data }: ReduxSetModalProps) => {
  return {
    type: SET_MODAL,
    modalAction,
    data,
  };
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL,
  };
};
