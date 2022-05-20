import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
