import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //.js is implicit in react, these are .js files.
import * as serviceWorker from './serviceWorker';

//<App/> refers to app.js
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
