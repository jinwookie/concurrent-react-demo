import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { searchShows } from './data';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

const initialResource = searchShows();

const Search = () => {
  console.log('render');
  const [resource, setResource] = useState(initialResource);
  const { search } = useLocation();
  const history = useHistory();

  const { q } = queryString.parse(search);

  useEffect(() => {
    setResource(searchShows(q));
  }, [q]);

  const submit = searchText => {
    history.push(`/search?q=${searchText}`);
  };

  const response = resource.read();

  return (
    <div className="search">
      <SearchForm value={q} onSubmit={submit} />
      <SearchResults items={response} />
    </div>
  );
};

export default Search;
