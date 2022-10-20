import React from 'react';
import { useState, useEffect } from 'react';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';
import getFetchApi from 'services/fetchTrendingi';

const Home = () => {
  const [moviesArr, setMoviesArr] = useState([]);

  const getFetchedMovieList = async () => {
    try {
      const response = await getFetchApi();
      setMoviesArr(response);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getFetchedMovieList();
    // eslint-disable-next-line
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
