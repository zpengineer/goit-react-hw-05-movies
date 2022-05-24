import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesListItem.module.css';

import noImage from '../../Img/no-image.png';

const MoviesListItem = ({ id, title, img }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <NavLink
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <div className={styles.thumb}>
          <img
            src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noImage}
            alt={title}
            className={styles.img}
          />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MoviesListItem;
