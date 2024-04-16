import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../slices/UserSlice';
import { selectUser} from '../../selector'; 


function Header() {
  const isLogged = useSelector(state =>
    state.user.isLogged);

  const user = useSelector(selectUser);
  console.log('User data in Header:', user);


  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearUser());  
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
              <div className='user'>
                <NavLink className="main-nav-item" to="/user">
                  <div className="user-name">
                    {user.userName}
                  </div>                    
                  <FontAwesomeIcon icon={faUserCircle} className="user-icon"/>
                </NavLink>
                <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                  <div className='user-set'>
                    <FontAwesomeIcon icon={faCog} />
                    <FontAwesomeIcon icon={faPowerOff} />
                  </div>
                </NavLink>
              </div>
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
