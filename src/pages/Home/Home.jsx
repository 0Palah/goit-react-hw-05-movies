import React from 'react';
import { useState, useEffect } from 'react';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';

import getFetchApi from '../../components/services/fetchApi';
// import { NavLink } from 'react-router-dom';

const Home = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  useEffect(() => {
    getFetchedMoviList();
  }, []);

  const getFetchedMoviList = async () => {
    try {
      const response = await getFetchApi();
      setMoviesArr(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="containet">
      <div>
        <h1>Trending today</h1>

        <TrendingMovieList moviesArr={moviesArr} />
      </div>
    </div>
  );
};

export default Home;
