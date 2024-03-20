import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import glass from '../assets/images/glass.jpg';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (email === 'admin@gmail.com' && password === 'adminpassword') {
      console.log("Admin login successful");
      
      navigate('/admin');
      return;
    }
    
    navigate('/');
  };

  return (
    <div>
      
      <div className='img'>
        <img src={glass} height={560} width={1260} alt='glass background' />
      </div>

      <div className='Container'>
        <div className='header'>
          <div className='text29'>LOGIN</div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <button type='submit' onClick={handleLogin}>
            LOGIN
          </button>
          <div className='input1'>
            Don't have an account? <Link to='/register'>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
