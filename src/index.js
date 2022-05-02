import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/app/App';
import 'bootstrap/dist/css/bootstrap.css';
import {LoginProvider} from '../src/shared/context/login.provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
