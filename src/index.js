import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyles';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  //</React.StrictMode>
);
