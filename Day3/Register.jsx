import React, { useState } from 'react';
import reg from '../assets/images/registerimg.jpeg';
import './Register.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
  };

  return (
    <div>
      
      <div className='img reg'>
        <img src={reg} height={590} width={1250} alt='Registration' />
      </div>
      <div className='entire'>
        <div className='heading'>
          <div className='text30'>SIGNUP</div>
        </div>
        <div className='values'>
          {error && <div className='error'>{error}</div>}
          <div className='value'>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='value'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='value'>
            <input type='text' placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className='value'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='value'>
            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className="div">
          <button type='submit' onClick={handleRegister}>
            <Link to='/login'>SIGNUP</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
