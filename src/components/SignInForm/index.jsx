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
    console.log("Token:", token);
    if (token) {
      navigate('/User');
      console.log('Redirecting to user page...');
    }
  }, [token, navigate]);
  console.log('Token:', token);


  const handleSignIn = async (e) => {
    e.preventDefault();   
    console.log('Submitting form with email:', email, 'and password:', password);
    dispatch(loginUser({ email, password }));
    
    try {
      const loginData = {
        email: email,
        password: password
      };
      console.log('Login data:', loginData);
      await dispatch(loginUser(loginData));
      console.log('Login request sent.');
      console.log('Login request completed successfully.');
      
      if (error) {
        console.log('Error:', error);
        console.error('Authentication failed:', error);
        console.log('Token after dispatch:', token);
      }
    } catch (error) {
      console.error('Failed to sign in:', error);
    }
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
      </section>
    </main>
  );
}

export default SignInForm;
