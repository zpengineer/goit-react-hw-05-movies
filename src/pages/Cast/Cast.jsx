import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import styles from './Cast.module.css';

import Loader from 'components/Loader/Loader';
import noImage from '../../components/Img/no-image.png';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setStatus('pending');

        await moviesApi.fetchMovieReviews(movieId).then(data => {
          const getCast = data.cast;

          if (getCast.length === 0) {
            setStatus('error');
          } else {
            setCast(getCast);
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        setStatus('resolved');
      }
    }

    if (movieId) {
      fetchMovieCast();
    }

    moviesApi.fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'error' && (
        <p className={styles.error}>We don't have any cast for this movie 😕</p>
      )}

      {status === 'resolved' && cast && (
        <>
          <ul className={styles.list}>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <li key={id} className={styles.item}>
                <div className={styles.thumb}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : noImage
                    }
                    alt={original_name}
                    className={styles.img}
                  />
                </div>

                <div className={styles.meta}>
                  <p className={styles.name}>{original_name}</p>
                  <p className={styles.character}>
                    Character: <span className={styles.text}>{character}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
