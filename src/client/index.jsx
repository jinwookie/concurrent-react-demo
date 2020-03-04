import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// ReactDOM.render(<App />, document.getElementById('root'));
