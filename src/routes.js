import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from '@/pages/Home';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default (
  <Switch>
    {routes.map(route => <Route key={route.path} {...route} />)}
  </Switch>
);
