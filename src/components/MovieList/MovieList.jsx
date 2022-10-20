import React from 'react';
import ListItem from 'components/ListItem/ListItem';
const MovieList = ({ array, location }) => {
  return (
    <ul>
      {array.map(el => {
        return <ListItem key={el.id} el={el} location={location} />;
      })}
    </ul>
  );
};
export default MovieList;
