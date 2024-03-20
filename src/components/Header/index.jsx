import { NavLink } from 'react-router-dom';
import './public/css/main.css'
import logo from './public/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
