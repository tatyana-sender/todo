import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles/globalStyles';
import App from './App';
import { store } from './store';
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Normalize />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
