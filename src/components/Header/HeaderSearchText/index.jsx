import React, { useState } from 'react';
import TextBox from '../../shared/TextBox';
import './styles.scss';

const HeaderSearchText = ({ onSearch }) => {
  const [searchText, setSearchText] = useState();

  const submit = e => {
    e.preventDefault();

    onSearch(searchText);
  };

  return (
    <div className="header__search">
      <form onSubmit={submit}>
        <TextBox type="search" className="header__search__input" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search.." />
      </form>
    </div>
  )
};

export default HeaderSearchText;
