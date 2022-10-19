import getSearchMovie from 'components/services/fetchSearchMovie';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
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
    getFetchedSearchMovie();
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
            const { id, title } = el;
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
