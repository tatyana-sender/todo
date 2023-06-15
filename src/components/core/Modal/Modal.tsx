import React, {Dispatch, FC, SetStateAction} from 'react';
import PlusIcon from '@/components/icons/PlusIcon';
import { ModalWrapper, CloseButton } from '@/components/core/Modal/Modal.styles';

interface ModalProps {
  isOpen?: boolean,
  Component?: JSX.Element | JSX.Element[],
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal:FC<ModalProps> = ({isOpen, Component, setIsOpen}) => {
  return (
    <ModalWrapper>
      <CloseButton onClick={() => setIsOpen(false)}>
        <PlusIcon />
      </CloseButton>
      {Component}
    </ModalWrapper>
  )
}

export default Modal;
