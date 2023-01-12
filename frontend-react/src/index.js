import React from 'react';
import App from './App';
import './index.css';
//ReactDOM.render(<App />, document.getElementById('root'));
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);