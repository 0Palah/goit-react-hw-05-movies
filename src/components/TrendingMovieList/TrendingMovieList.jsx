import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovieList = ({ moviesArr }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesArr.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {' '}
              {el.title || el.name}{' '}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovieList;
