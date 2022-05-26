import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.mainNav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? ['active', styles.activeLink].join(' ') : styles.link
        }
        state={{ from: location }}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? ['active', styles.activeLink].join(' ') : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
