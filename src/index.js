import React from 'react';
import ReactDOM from 'react-dom';
import './2-Styling/1-Index/index.scss';
import App from './App.js';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './Odds & Ends/reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
