import { ModalActionTypes, ModalAction } from '@/types/modal';

export const showModal = (content: React.ReactNode) => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: content,
});

export const hideModal = () => ({
  type: ModalActionTypes.HIDE_MODAL,
});
