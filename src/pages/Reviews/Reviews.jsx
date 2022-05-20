import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews && (
        <>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
