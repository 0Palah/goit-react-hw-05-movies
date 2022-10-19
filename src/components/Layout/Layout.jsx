import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to={'/'} end className={css.navLink}>
          Home
        </NavLink>
        <NavLink to={'/movies'} className={css.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Layout;
