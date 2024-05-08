import 'react-datepicker/dist/react-datepicker.css';
import { createGlobalStyle } from 'styled-components';

const colors = {
  black: '#222327',
  black2: 'rgba(28, 29, 34, 0.5)',
  black3: 'rgba(28, 29, 34, 0.1)',
  black4: 'rgba(28, 29, 34, 0.04)',
  black5: '#24262C',
  black6: '#292B31',
  darkGray: '#2A2B2F',
  gray: 'rgba(255,255,255,0.5)',
  gray2: '#ababab',
  gray3: '#888DA7',
  gray4: '#989CAA',
  gray5: 'rgba(136, 141, 167, 0.1)',
  lightGray: 'rgba(255, 255, 255, 0.1)',
  white: '#FFF',
  white2: 'rgba(255,255,255,0.5)',
  white3: 'rgba(255,255,255,0.1)',
  white4: 'rgba(255,255,255,0.04)',
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
    '--border-color': theme == 'light' ? colors.black3 : colors.white3,
    '--red-color': colors.red,
    '--orange-color': colors.orange,
    '--blue-color': colors.blue,
    '--green-color': colors.green,
    '--white-color': colors.white,

    '--sidebar-bg-color': theme == 'light' ? colors.white : colors.black,
    '--link-color': theme == 'light' ? colors.black2 : colors.white2,
    '--link-active-color': theme == 'light' ? colors.black : colors.white,
    '--link-active-bg-color': theme == 'light' ? colors.black4 : colors.white4,
    '--contained-bg-color': theme == 'light' ? colors.black : colors.blue,
    '--column-bg-color': theme == 'light' ? colors.white : colors.black5,
    '--column-border-color': theme == 'light' ? colors.black4 : colors.black5,
    '--item-bg-color': theme == 'light' ? colors.white : colors.black6,
    '--item-border-color': theme == 'light' ? colors.black4 : colors.black6,
    '--deadline-color': theme == 'light' ? colors.gray3 : colors.gray4,
    '--deadline-bg-color': theme == 'light' ? colors.gray5 : colors.white4,
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

  'input, textarea': {
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