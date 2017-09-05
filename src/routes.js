import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

import IconAvatar from '@/assets/avatar.svg';
import IconCopy from '@/assets/copy.svg';
import IconMagnifyingGlass from '@/assets/magnifying-glass.svg';
import IconReload from '@/assets/reload.svg';

const routes = [];

export const navigationRoutes = [
  {
    path: '/',
    component: Home,
    text: 'Jelajah',
    exact: true,
    icon: IconMagnifyingGlass,
  },
  {
    path: '/koleksi',
    text: 'Koleksi',
    icon: IconCopy,
  },
  {
    path: '/peminjaman',
    text: 'Pinjaman',
    icon: IconReload,
  },
  {
    path: '/profil',
    text: 'Profil',
    icon: IconAvatar,
  },
];

export default (
  <Switch>
    {navigationRoutes.map(route => <Route {...route} />)}
    {routes.map(route => <Route {...route} />)}
    <Route path="*" component={NotFound} />
  </Switch>
);
