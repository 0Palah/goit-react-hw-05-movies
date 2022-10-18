import React, { useEffect, useState } from 'react';
import getFetchReviews from 'components/services/fetchReviews';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState();

  const { movieId } = useParams();

  const getFetchedReviews = async () => {
    try {
      const response = await getFetchReviews({ movieId });
      console.log(response.results);
      setMovieReviews(response.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFetchedReviews();
  }, []);

  if (!movieReviews || movieReviews.length === 0)
    return <p>We don't have any reviews for this movie</p>;

  return (
    <ul>
      {movieReviews.map(el => {
        const { id, author, content } = el;
        return (
          <li key={id}>
            <div className={css.cardWrap}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
