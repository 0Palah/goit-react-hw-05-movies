import React from 'react';
import { Link } from 'react-router-dom';

const TrendingMovieList = ({ moviesArr }) => {
  return (
    <ul>
      {moviesArr.map(el => {
        return (
          <li key={el.id}>
            <Link> {el.title || el.name} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovieList;
