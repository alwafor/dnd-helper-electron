import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/frontend/assets/styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MemoryRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </MemoryRouter>
);

document.title = 'DnD Helper';
