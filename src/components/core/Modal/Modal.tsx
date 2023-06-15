import React, {Dispatch, FC, SetStateAction} from 'react';
import PlusIcon from '@/components/icons/PlusIcon';
import { ModalWrapper, CloseButton } from '@/components/core/Modal/Modal.styles';

interface ModalProps {
  isOpen?: boolean,
  Component: JSX.ElementType,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  addTask?: any
}

const Modal:FC<ModalProps> = (
  {
    isOpen,
    Component,
    setIsOpen,
    addTask
  }) => {
  return (
    <ModalWrapper>
      <CloseButton onClick={() => setIsOpen(false)}>
        <PlusIcon />
      </CloseButton>
      <Component addTask={addTask} />
    </ModalWrapper>
  )
}

export default Modal;
