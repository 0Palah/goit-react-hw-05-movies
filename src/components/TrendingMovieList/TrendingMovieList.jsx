import React from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from 'components/ListItem/ListItem';

const TrendingMovieList = ({ moviesArr }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesArr.map(el => {
        return (
          <ListItem key={el.id} el={el} location={location} />
          // <li key={el.id}>
          //   <Link to={`/movies/${el.id}`} state={{ from: location }}>
          //     {el.title || el.name}
          //   </Link>
          // </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovieList;
