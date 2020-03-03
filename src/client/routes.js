import { lazy } from 'react';

const Home = lazy(() => import('../containers/Home'));
const Search = lazy(() => import('../containers/Search'));
const Users = lazy(() => import('../containers/Users'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/users',
    exact: true,
    component: Users,
  },
];

export default routes;
