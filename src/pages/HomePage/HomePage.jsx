import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';

export default function Homepage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setTrending(results));
  }, []);

  return (
    <div>
      <h2>Home</h2>

      {trending && (
        <ul>
          {trending.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
