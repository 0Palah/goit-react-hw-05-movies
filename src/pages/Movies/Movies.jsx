import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/fetchSearchMovie';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const location = useLocation();
  const [moviesFoundArr, setFoundArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const getFetchedSearchMovie = async () => {
    try {
      const response = await getSearchMovie({ searchQuery });
      setFoundArr(response);
    } catch (err) {
      alert(err);
    }
  };

  const handleChangeInput = evt => {
    evt.preventDefault();
    const { value } = evt.target.searchInput;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    searchQuery && getFetchedSearchMovie();
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div>
      <form action="" onSubmit={evt => handleChangeInput(evt)}>
        <input type="text" name="searchInput" />
        <button type="submit">Search</button>
      </form>
      {moviesFoundArr.length > 0 && (
        <MovieList array={moviesFoundArr} location={location}></MovieList>
      )}
    </div>
  );
};

export default Movies;
