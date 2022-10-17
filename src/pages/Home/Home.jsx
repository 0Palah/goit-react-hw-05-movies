import React from 'react';
import { useState, useEffect } from 'react';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';

import getFetchApi from 'components/services/fetchApi';
import getFetchById from 'components/services/fetchById';

// import { NavLink } from 'react-router-dom';

const Home = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [movieId, setMovieId] = useState('436270');

  const getFetchedMovieList = async () => {
    try {
      const response = await getFetchApi();
      setMoviesArr(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getFetchedMovieById = async () => {
    console.log(1);
    // try {
    const response = await getFetchById({ movieId });

    // //   setMoviesArr(response);
    // console.log(response);
    // // } catch (err) {
    // //   console.log(err);
    // // }
  };

  useEffect(() => {
    getFetchedMovieList();
  }, []);

  useEffect(() => {
    getFetchedMovieById();
  }, []);

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
