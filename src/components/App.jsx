import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout/Layout';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'pages/Cast/Cast';
// import Reviews from 'pages/Reviews/Reviews';
// import NotFound from 'pages/NotFound/NotFound';
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

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
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Movies></Movies>
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Cast />
              </Suspense>
            }
          ></Route>
          <Route
            path="reviews"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Reviews />
              </Suspense>
            }
          ></Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};
