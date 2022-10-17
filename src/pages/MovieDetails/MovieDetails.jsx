import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <Link>Go back</Link>
      <div>
        <div>img wrapper</div>
        <div>Description</div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
