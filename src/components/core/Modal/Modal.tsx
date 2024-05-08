import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import PlusIcon from '@/components/icons/PlusIcon';
import { ModalWrapper, CloseButton } from '@/components/core/Modal/Modal.styles';

const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { hideModal } = useActions();
  const { showModal, modalContent } = useTypedSelector(state => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };

  if (!showModal) {
    return null;
  }

  const handleResize = () => {
    if (modalRef.current) {
      modalRef.current.style.height = `${modalRef.current.children[1].clientHeight + 50}px`;
    }
  };

  return (
    <ModalWrapper ref={modalRef} onInput={handleResize}>
      <CloseButton onClick={closeModal} data-testid="close-modal">
        <PlusIcon />
      </CloseButton>
      {modalContent}
    </ModalWrapper>
  );
};

export default Modal;
