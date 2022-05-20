import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar/AppBar';
import Homepage from 'pages/HomePage/HomePage';
import Moviespage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Homepage />} />
          <Route path="movies/" element={<Moviespage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
}
