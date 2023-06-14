import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './core/theme';
import GlobalStyles from './styles/globalStyles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
