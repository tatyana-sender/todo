import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { hideModal } from '@/store/actions/modalActions';
import PlusIcon from '@/components/icons/PlusIcon';
import { ModalWrapper, CloseButton } from '@/components/core/Modal/Modal.styles';

const Modal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const { showModal, modalContent } = useTypedSelector(state => state.modal);

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
