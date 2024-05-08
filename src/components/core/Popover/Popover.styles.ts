import styled from 'styled-components';

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
  border: '0.2rem solid var(--item-border-color)',
  background: 'var(--item-bg-color)',
  color: 'var(--text3-color)',

  button: {
    marginBottom: '2rem',

    svg: {
      fill: 'transparent',
      stroke: 'var(--link-active-color)',
    },
  }
}));
