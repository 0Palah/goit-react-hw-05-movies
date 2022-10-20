import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ el, location }) => {
  return (
    <li>
      <Link to={`/movies/${el.id}`} state={{ from: location }}>
        {el.title || el.name}
      </Link>
    </li>
  );
};

export default ListItem;
