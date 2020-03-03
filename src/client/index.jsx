import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NavProvider } from '../context/NavContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavProvider>
      <App />
    </NavProvider>
  </BrowserRouter>
);
// ReactDOM.render(<App />, document.getElementById('root'));
