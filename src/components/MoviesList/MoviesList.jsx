import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

MoviesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoviesList;
