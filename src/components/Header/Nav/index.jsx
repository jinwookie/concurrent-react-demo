import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Nav = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/users">Users</Link></li>
    </ul>
  </nav>
);

export default Nav;
