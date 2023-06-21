import React, {Dispatch, FC, SetStateAction} from 'react';
import PlusIcon from '@/components/icons/PlusIcon';
import { ModalWrapper, CloseButton } from '@/components/core/Modal/Modal.styles';

interface ModalProps {
  isOpen?: boolean,
  children: string | JSX.Element | JSX.Element[],
  setModal:  Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
}

const Modal:FC<ModalProps> = (
  {
    isOpen,
    children,
    setModal
  }) => {
  return (
    <ModalWrapper>
      <CloseButton onClick={() => setModal({isOpen: false, isEdit: false})}>
        <PlusIcon />
      </CloseButton>
      {children}
    </ModalWrapper>
  )
}

export default Modal;
