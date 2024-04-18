import styled from 'styled-components';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover/Popover';

export const PopoverWrapper = styled.div(({}) => ({
  position: 'absolute',
  top: '4rem',
  right: 0,
  zIndex: 10,
  display: 'flex',
  flexWrap: 'wrap',
  width: 'min-content',
  minWidth: '5rem',
  minHeight: '10rem',
  padding: '1.8rem',
  borderRadius: '1.2rem',
  background: 'var(--bg-color)',
  color: 'var(--text3-color)',

  button: {
    marginBottom: '2rem',
  }
}));
