import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// const setActive = ({ isActive }) => (isActive ? activeStyle : undefined);

const Navigation = () => (
  <nav className={styles.mainNav}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? ['active', styles.activeLink].join(' ') : styles.link
      }
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

export default Navigation;
