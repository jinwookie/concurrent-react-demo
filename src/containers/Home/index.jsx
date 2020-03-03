import React, { useState } from 'react';
import { getUsers } from './data';

const initialResource = getUsers();

const Home = () => (
  <div className="home">
    <h1>Welcome</h1>
  </div>
);

export default Home;
