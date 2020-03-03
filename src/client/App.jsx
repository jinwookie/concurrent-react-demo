import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import './App.scss';
import Header from '../components/Header';

const App = () => (
  <div className="container">
    <Header />
    <main className="main-content">
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </main>
  </div>
);

export default hot(App);
