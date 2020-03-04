import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderSearchText from '../HeaderSearchText';

const HeaderSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const history = useHistory();

  const search = text => {
    setSearchOpen(false);
    history.push(`/search?q=${text}`);
  };

  const openSearch = () => setSearchOpen(true);

  if (searchOpen) {
    return (
      <HeaderSearchText onSearch={search} />
    );
  }

  return (
    <button type="button" onClick={openSearch}>Search</button>
  );
};

export default HeaderSearch;
