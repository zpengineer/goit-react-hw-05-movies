import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';

function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <Outlet />
    </>
  );
}

export default AppBar;
