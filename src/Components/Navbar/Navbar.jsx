//import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { usecontextGlobal } from '/utils/GlobalContext';
import './Navbar.css';

const Navbar = () => {
  const { changeTheme } = usecontextGlobal();

  return (
    <div className="navbar">
      <div className="links">
        <Link to={routes.home} className="link"><h2>Home</h2></Link>
        <Link to={routes.contact} className="link"><h2>Contact</h2></Link>
        <Link to={routes.favs} className="link"><h2>Favs</h2></Link>
        <div className="button-container">
          <button className="button" onClick={changeTheme}>
            ☀ ☽
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

