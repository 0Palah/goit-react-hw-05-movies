import React from 'react';
import { useState, useEffect } from 'react';

import getFetchApi from '../../components/services/fetchApi';
// import { NavLink } from 'react-router-dom';

const Home = () => {
  const [moviesArr, setmoviesArr] = useState;
  useEffect(() => {
    getFetchedMoviList();
  }, []);

  const getFetchedMoviList = async () => {
    try {
      const response = await getFetchApi();
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    return (
      <div className="containet">
        <div>
          <h1>Trending today</h1>
          <ul>
            <li>Title</li>
          </ul>
        </div>
      </div>
    );
  };
};
export default Home;
