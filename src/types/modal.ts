import { ReactNode } from 'react';

export interface  ModalState {
  showModal: boolean,
  modalContent: null | ReactNode
}

export enum ModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL"
}

interface showModalAction {
  type: ModalActionTypes.SHOW_MODAL;
  payload: any;
}

interface hideModalAction {
  type: ModalActionTypes.HIDE_MODAL;
}

export type ModalAction = showModalAction | hideModalAction;
