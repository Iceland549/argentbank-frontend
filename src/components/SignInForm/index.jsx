import '../../css/main.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../pages/User/UserSlice';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const error = useSelector(state => state.user.error);

  useEffect(() => {
    if (token) {
      navigate('/User');
    }
  }, [token, navigate]);


  const handleSignIn = async (e) => {
    e.preventDefault();   
    dispatch(loginUser({ email, password }));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit' className="sign-in-button">Sign In</button>
        </form>
        <p>{error}</p>
      </section>
    </main>
  );
}

export default SignInForm;
