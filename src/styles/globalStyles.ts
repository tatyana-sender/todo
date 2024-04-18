import 'react-datepicker/dist/react-datepicker.css';
import { createGlobalStyle } from 'styled-components';

const colors = {
  black: '#222327',
  darkGray: '#2A2B2F',
  gray: 'rgba(255,255,255,0.5)',
  gray2: '#ababab',
  gray3: '#888',
  lightGray: 'rgba(255, 255, 255, 0.1)',
  white: '#FFF',
  blue: '#4B69FF',
  green: '#78D700',
  orange: '#FFA048',
  red: '#FF7979'
};

export default createGlobalStyle(({ theme }) => ({
  ':root': {
    '--main-bg-color': theme == 'light' ? colors.white : colors.darkGray,
    '--bg-color': theme == 'light' ? colors.gray2 : colors.black,
    '--bg2-color': theme == 'light' ? colors.gray3 : colors.lightGray,
    '--text-color': theme == 'light' ? colors.black : colors.white,
    '--text2-color': theme == 'light' ? colors.black : colors.gray,
    '--text3-color': theme == 'light' ? colors.black : colors.lightGray,
    '--border-color': theme == 'light' ? colors.gray : colors.lightGray,
    '--red-color': colors.red,
    '--orange-color': colors.orange,
    '--blue-color': colors.blue,
    '--green-color': colors.green,
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'html': {
    minHeight: '100%',
    fontSize: '62.5%',
    fontFamily: 'Roboto',
  },

  'body': {
    position: 'relative',
    minHeight: '100vh',
    fontSize: '1.6rem',
    fontFamily: 'Exo 2',
  },

  '.wrapper': {
    display: 'flex',
    minHeight: '100vh',

    '&.openModal::after': {
      content: '',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
    }
  },

  'input': {
    width: '100%',
    padding: '1rem',
    marginBottom: '2rem',
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    background: 'transparent',
    color: 'var(--text-color)',
  },

  'select': {
    width: '100%',
    padding: '1rem',
    marginBottom: '2rem',
    border: 'none',
    borderBottom: '1px solid gray',
    background: 'transparent',
    color: 'var(--text-color)',
  },

  '.react-datepicker-wrapper': {
    width: '100%',
    marginBottom: '2rem',
  },
}));