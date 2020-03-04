import React, { useState, useEffect } from 'react';
import TextBox from '../shared/TextBox';
import Button from '../shared/Button';

const SearchForm = ({
  value,
  onSubmit,
}) => {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    if (value !== search) {
      setSearch(value);
    }
  }, [value]);

  const submit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (onSubmit) {
      onSubmit(search);
    }
  };

  return (
    <form onSubmit={submit}>
      <TextBox type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <Button htmlType="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
