import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import Layout from './Layout';
import Loader from './Loader/Loader';

const Homepage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const Moviespage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "moviesdetails-page" */
  )
);
const PageNotFound = lazy(() =>
  import('../pages/PageNotFound' /* webpackChunkName: "notfound-page" */)
);

export function App() {
  useEffect(() => {
    pageHeader();
  });

  const pageHeader = () => {
    const { height: pageHeaderHeight } = document
      .querySelector('#header')
      .getBoundingClientRect();

    document.body.style.paddingTop = `${pageHeaderHeight}px`;
  };

  return (
    <Container>
      <Layout />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="movies/" element={<Moviespage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
