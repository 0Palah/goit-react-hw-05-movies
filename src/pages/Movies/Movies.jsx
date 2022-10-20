import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/fetchSearchMovie';
import ListItem from 'components/ListItem/ListItem';

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
        <ul>
          {moviesFoundArr.map(el => {
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
      )}
    </div>
  );
};

export default Movies;
