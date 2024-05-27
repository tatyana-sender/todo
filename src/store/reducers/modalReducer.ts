import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from '@/types/modal';

const initialState: ModalState = {
  showModal: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<React.ReactNode>) => {
      state.showModal = true;
      state.modalContent = action.payload;
    },
    hideModal: (state) => {
      state.showModal = false
      state.modalContent = null
    }
  }
})

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;