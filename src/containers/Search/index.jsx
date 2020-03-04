import React, { Suspense, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { searchShows } from './data';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import Loader from '../../components/shared/Loader';
import './styles.scss';

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

  return (
    <div className="search">
      <div className="search__form">
        <SearchForm value={q} onSubmit={submit} />
      </div>
      <div className="search__results">
        <Suspense fallback={<Loader />}>
          <SearchResults resource={resource} />
        </Suspense> 
      </div>
    </div>
  );
};

export default Search;
