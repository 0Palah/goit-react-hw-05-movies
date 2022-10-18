import { NavLink, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <header className={css.header}>
        <nav>
          <NavLink to={'/'} className={css.navLink}>
            Home
          </NavLink>
          <NavLink to={'/movies'} className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Movies/:movieId/cast</div>}></Route>
          <Route
            path="reviews"
            element={<div>Movies/:movieId/reviews</div>}
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
