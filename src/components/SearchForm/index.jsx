import React, { useState } from 'react';

const SearchForm = ({
  value,
  onSubmit,
}) => {
  const [search, setSearch] = useState(value);

  const submit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (onSubmit) {
      onSubmit(search);
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
