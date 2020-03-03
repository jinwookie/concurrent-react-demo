import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavReducer } from '../../context/NavContext';
import './styles.scss';

const Header = () => {
  const [state, dispatch] = useNavReducer();
  console.log(state);
  useEffect(() => {
    dispatch({ type: 'setNavItems', payload: [{ url: '/users', text: 'Users' }] });
  }, []);

  console.log('Header render');

  return (
    <header className="header">
      <div className="header__left">
        <Link className="header__logo" to="/">VICE</Link>
      </div>
      <div className="header__right">
        {state && state.items.map(item => <a key={item.url} href={item.url}>{item.text}</a>)}
      </div>
    </header>
  );
};

export default Header;
