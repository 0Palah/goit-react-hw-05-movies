import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

const TrendingMovieList = ({ moviesArr }) => {
  const location = useLocation();
  return <MovieList array={moviesArr} location={location}></MovieList>;
};

export default TrendingMovieList;
