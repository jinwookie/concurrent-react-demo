import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HeaderSearch from './HeaderSearch';
import './styles.scss';

const Header = () => {
  console.log('Header render');

  return (
    <header className="header">
      <div className="header__left">
        <Link className="header__logo" to="/">VICE</Link>
        <Nav />
      </div>
      <div className="header__right">
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
