import React from 'react';

import './styles/_reset.scss';
import './styles/index.scss';

import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

