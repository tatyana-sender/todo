import styled from 'styled-components';
import Button from '@/components/core/Button';

export const ModalWrapper = styled.div(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 10,
  width: '30vw',
  minWidth: '31rem',
  height: '30vh',
  minHeight: '31rem',
  padding: '1.8rem',
  borderRadius: '1.2rem',
  background: theme.black,
  transform: 'translate(-50%, -50%)'
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '1.8rem',
  right: '1.8rem',
  lineHeight: 0,

  'svg': {
    transform: 'rotate(45deg)'
  }
}));
