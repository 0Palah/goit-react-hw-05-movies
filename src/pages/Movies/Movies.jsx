import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'components/services/fetchSearchMovie';

const Movies = () => {
  const location = useLocation();
  const [moviesFoundArr, setFoundArr] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  console.log(searchQuery);

  const getFetchedSearchMovie = async () => {
    try {
      const response = await getSearchMovie({ searchQuery });
      console.log(response);
      setFoundArr(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeInput = evt => {
    evt.preventDefault();
    const { value } = evt.target.searchInput;
    console.log(evt);
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
        <ul>
          {moviesFoundArr.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} state={{ from: location }}>
                  {' '}
                  {el.title || el.name}{' '}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
