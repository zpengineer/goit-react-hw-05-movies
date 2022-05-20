import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

let activeStyle = {
  color: '#D636C9',
};

const setActive = ({ isActive }) => (isActive ? activeStyle : undefined);

const Navigation = () => (
  <nav className={styles.mainNav}>
    <NavLink to="/" className={styles.link} style={setActive}>
      Home
    </NavLink>

    <NavLink to="/movies" className={styles.link} style={setActive}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
