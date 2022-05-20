import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.vote_average * 10}%</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{movie.overview}</p>

          <nav>
            <p>Additional information</p>

            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>

              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </>
      )}
    </>
  );
}
