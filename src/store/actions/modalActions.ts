import { hideModalAction, ModalActionTypes, showModalAction } from '@/types/modal';

export const showModal = (content: React.ReactNode): showModalAction => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: content,
})

export const hideModal = (): hideModalAction => ({
  type: ModalActionTypes.HIDE_MODAL,
})
