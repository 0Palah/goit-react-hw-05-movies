import React, { useEffect, useState } from 'react';
import getFetchCast from 'components/services/fetchCast';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();

  const { movieId } = useParams();

  const getFetchedCast = async () => {
    try {
      const response = await getFetchCast({ movieId });
      console.log(response.cast);
      setMovieCast(response.cast);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFetchedCast();
  }, []);

  if (!movieCast) return null;

  return (
    <ul>
      {movieCast.map(el => {
        const { id, name, character, profile_path } = el;
        return (
          <li key={id}>
            <div className={css.cardWrap}>
              <div className={css.imgWrap}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="portrait"
                />
              </div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
