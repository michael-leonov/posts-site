import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import UserDetails from './pages/user-details';
import NotFound from './pages/not-found';
import { HOME_ROUTE, ABOUT_ROUTE, USER_DETAILS_ROUTE } from './utils/consts';

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={`${USER_DETAILS_ROUTE}/:id`} element={<UserDetails />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
