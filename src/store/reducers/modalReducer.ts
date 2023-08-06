import { ModalState, ModalAction, ModalActionTypes } from '@/types/modal';

const initialState: ModalState = {
  showModal: false,
  modalContent: null,
};

const modalReducer = (state = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return { ...state, showModal: true, modalContent: action.payload };
    case ModalActionTypes.HIDE_MODAL:
      return { ...state, showModal: false, modalContent: null };
    default:
      return state;
  }
};

export default modalReducer;
