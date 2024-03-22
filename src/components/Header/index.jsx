import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../pages/User/UserSlice';

function Header() {
  const isLogged = useSelector(state =>
    state.user.isLogged);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());  
  }


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
                <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                    <FontAwesomeIcon icon={faSignOut} />
                    Sign Out
                </NavLink>
            </>
            ) : (
            <NavLink className="main-nav-item" to="/SignIn">
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
