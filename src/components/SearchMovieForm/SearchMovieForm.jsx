import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchMovieForm.module.css';

const SearchMovieForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchQuery = e => {
    const searchQuery = e.target.value.trim().toLowerCase();

    setQuery(searchQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery(' ');
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.form}>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          <span className={styles.label}>
            <BsSearch size={24} />
          </span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search movies"
          value={query}
          onChange={handleSearchQuery}
        />
      </form>
    </div>
  );
};

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovieForm;
