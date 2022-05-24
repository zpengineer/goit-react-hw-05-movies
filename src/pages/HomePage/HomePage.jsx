import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/movies-api';
import styles from './HomePage.module.css';

import MoviesList from 'components/MoviesList';
import MoviesListItem from 'components/MoviesList/MoviesListItem';

export default function Homepage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setTrending(results));
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Trending movies today</h2>

      {trending && (
        <MoviesList>
          {trending.map(movie => (
            <MoviesListItem
              key={movie.id}
              title={movie.title}
              id={movie.id}
              img={movie.poster_path}
            />
          ))}
        </MoviesList>
      )}
    </div>
  );
}
