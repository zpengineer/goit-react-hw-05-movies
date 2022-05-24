import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import styles from './Reviews.module.css';

import Loader from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setStatus('pending');

        await moviesApi.fetchMovieReviews(movieId).then(data => {
          const getData = data.results;

          if (getData.length === 0) {
            setStatus('error');
          } else {
            setReviews(getData);
            setStatus('resolved');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (movieId) {
      fetchMovieReviews();
    }
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'error' && (
        <p className={styles.error}>
          We don't have any reviews for this movie 😕
        </p>
      )}

      {status === 'resolved' && (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.item}>
              <p className={styles.author}>
                Author: <span className={styles.text}>{author}</span>
              </p>
              <p className={styles.content}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
