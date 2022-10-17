import React from 'react';

const TrendingMovieList = ({ moviesArr }) => {
  return (
    <ul>
      {moviesArr.map(el => {
        return <li key={el.id}> {el.title} </li>;
      })}
      <li>TrendingMovieList</li>;
    </ul>
  );
};

export default TrendingMovieList;
