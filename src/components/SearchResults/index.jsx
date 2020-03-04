import React, { Suspense } from 'react';
import './styles.scss';

const SearchResults = ({ resource }) => {
  const items = resource.read();

  if (!items || items.length < 1) {
    return (<div>No Results</div>);
  }

  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <ul className="search-results">
        {
          items.map(({ show }) => (
            <li className="search-results__item" key={show.id}>
              <div className="search-results__item__left">
                {
                  show.image && show.image.medium ? (
                    <img className="search-results__item__image" src={show.image.medium} alt={show.name} />
                  ) : <div className="search-results__item__no-image"></div>
                }
              </div>
              <div className="search-results__item__details">
                <h3>{show.name}</h3>
                <div className="search-results__item__description" dangerouslySetInnerHTML={{ __html: show.summary }}></div>
              </div>
            </li>
          ))
        }
      </ul>
    </Suspense>
  )
};

export default SearchResults;
