import createResource from '../../utils/createResource';

export const searchShows = (q) => createResource(
  q ?
    fetch(`http://api.tvmaze.com/search/shows?q=${q}`).then(response => response.json()) :
    Promise.resolve()
);
