import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from '../components/Header';
import Loader from '../components/shared/Loader';
import './App.scss';

const App = () => (
  <div className="container">
    <Header />
    <main className="main-content">
      <Suspense fallback={<Loader />}>
        {renderRoutes(routes)}
      </Suspense>
    </main>
  </div>
);

export default hot(App);
