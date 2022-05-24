import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import * as moviesApi from '../../services/movies-api';
import Loader from 'components/Loader/Loader';
import noImage from '../../components/Img/no-image.png';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews-page" */)
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setStatus('pending');

        await moviesApi.fetchMovieDetails(movieId).then(data => {
          setMovie(data);
        });
      } catch {
        setStatus('error');
      } finally {
        setStatus('resolved');
      }
    }

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'resolved' && (
        <>
          <div className={styles.container}>
            <div className={styles.goBack}>
              <button type="button" onClick={goBack} className={styles.button}>
                <BsFillArrowLeftCircleFill size={36} />
              </button>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.movieInfo}>
                <div className={styles.thumb}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : noImage
                    }
                    alt={movie.title}
                    className={styles.img}
                  />
                </div>

                <div className={styles.movieMeta}>
                  <h2 className={styles.title}>{movie.title}</h2>

                  <p className={styles.text}>
                    User score:{' '}
                    <span className={styles.score}>
                      {movie.vote_average * 10}%
                    </span>
                  </p>

                  <p className={styles.text}>Overview:</p>

                  <p className={styles.overview}>{movie.overview}</p>

                  <p className={styles.text}>Genres:</p>

                  <ul className={styles.genresList}>
                    {movie.genres.map(genre => (
                      <li key={genre.id} className={styles.genresItem}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.additionalInfo}>
                <p className={styles.infoTitle}>Additional information</p>

                <ul className={styles.linksList}>
                  <li className={styles.linkItem}>
                    <Link
                      to="cast"
                      state={{ from: location }}
                      className={styles.link}
                    >
                      Cast
                    </Link>
                  </li>

                  <li className={styles.linkItem}>
                    <Link
                      to="reviews"
                      state={{ from: location }}
                      className={styles.link}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
