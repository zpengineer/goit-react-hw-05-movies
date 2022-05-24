import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import SearchMovieForm from 'components/SearchMovieForm';

import MoviesList from 'components/MoviesList';
import MoviesListItem from 'components/MoviesList/MoviesListItem';
import Loader from 'components/Loader/Loader';

export default function Moviespage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const query = searchParams.get('query');

  useEffect(() => {
    async function fetchSearchMovies() {
      try {
        setStatus('pending');

        await moviesApi.fetchSearchMovies(query).then(data => {
          const getData = data.results;

          if (getData.length === 0) {
            setStatus('error');
          } else {
            setMovies(getData);
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        setStatus('resolved');
      }
    }

    if (query !== null) {
      fetchSearchMovies();
    }
  }, [query]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
    setMovies([]);
  };

  return (
    <>
      <SearchMovieForm onSubmit={handleFormSubmit} />

      {status === 'pending' && <Loader />}

      {status === 'resolved' && (
        <MoviesList>
          {movies.map(movie => (
            <MoviesListItem
              key={movie.id}
              title={movie.title}
              id={movie.id}
              img={movie.poster_path}
            />
          ))}
        </MoviesList>
      )}
    </>
  );
}
