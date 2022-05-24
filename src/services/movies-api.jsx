const axios = require('axios');
const API_KEY = 'c650d1c0c307d1ff6855b3a117a6cfa1';
const BASE_URL = `https://api.themoviedb.org/3`;

async function moviesApi(url = '', config = {}) {
  const response = await axios.get(url, config);
  const data = await response.data;

  return data;
}

export function fetchTrendingMovies() {
  return moviesApi(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovieDetails(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCast(movieId) {
  return moviesApi(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return moviesApi(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function fetchSearchMovies(query) {
  return moviesApi(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}
