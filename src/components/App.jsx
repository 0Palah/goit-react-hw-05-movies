import { NavLink, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

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
      <header>
        <nav>
          <NavLink>Home</NavLink>
          <NavLink>Movies</NavLink>
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
