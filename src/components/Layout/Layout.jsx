import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Container from 'components/Container';
// import Footer from 'components/Footer';
import styles from './Layout.module.css';

function AppBar() {
  return (
    <>
      <header className={styles.header} id="header">
        <Container>
          <Navigation />
        </Container>
      </header>

      <Outlet />
    </>
  );
}

export default AppBar;
