import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';


function Header({ isLogged }) {
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
            {isLogged ? (
            <>
                <NavLink className="main-nav-item" to="/user">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Tony
                </NavLink>
                <NavLink className="main-nav-item" to="/sign-out">
                    <FontAwesomeIcon icon={faSignOut} />
                    Sign Out
                </NavLink>
            </>
            ) : (
            <NavLink className="main-nav-item" to="/sign-in">
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};
Header.defaultProps = {
    isLogged: false
  };
export default Header;
