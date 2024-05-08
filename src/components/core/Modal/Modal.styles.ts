import styled from 'styled-components';
import Button from '@/components/core/Button';

export const ModalWrapper = styled.div(({}) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 10,
  width: '30vw',
  minWidth: '31rem',
  height: '30vh',
  minHeight: '35rem',
  padding: '2.8rem 8rem 2.8rem 2.8rem',
  borderRadius: '1.2rem',
  background: 'var(--main-bg-color)',
  transform: 'translate(-50%, -50%)',
  color: 'var(--text3-color)'
}));

export const CloseButton = styled(Button)(({}) => ({
  position: 'absolute',
  top: '1.8rem',
  right: '1.8rem',
  lineHeight: 0,

  'svg': {
    transform: 'rotate(45deg)'
  }
}));
