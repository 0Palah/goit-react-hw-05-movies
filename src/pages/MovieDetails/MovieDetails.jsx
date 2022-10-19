import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getFetchById from 'components/services/fetchById';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetailsObj, setMovieDetailsObj] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  console.log(movieId);

  const getFetchedMovieById = async () => {
    try {
      const response = await getFetchById({ movieId });

      console.log(response);
      setMovieDetailsObj(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFetchedMovieById();
    // eslint-disable-next-line
  }, []);

  if (!movieDetailsObj) return null;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLinkHref} className={css.btnGoBack}>
        Go back
      </Link>
      <div className={css.movieDetails}>
        <div className={css.imgWrapper}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${movieDetailsObj?.poster_path}`}
            alt="poster"
          />
        </div>
        <div>
          <h2>{movieDetailsObj?.title}</h2>
          <p>{`User Score: ${Math.round(
            movieDetailsObj?.vote_average * 10
          )}%`}</p>
          <h3>Overview</h3>
          <p>{movieDetailsObj?.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetailsObj?.genres.map(el => el.name).join(' ')}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
