import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);