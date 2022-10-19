import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Home from '../pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import Layout from '../components/Layout/Layout';
// import css from './App.module.css';

// const Movies = lazy(() => import('../pages/Movies/Movies'));

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
      {/* <header className={css.header}>
        <nav>
          <NavLink to={'/'} end className={css.navLink}>
            Home
          </NavLink>
          <NavLink to={'/movies'} className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header> */}
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
