import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
    <div className="navbar">
        <div className="logo">
          <h1><Link to='/'><FontAwesomeIcon icon="fa-brands fa-dyalog" />PARTYDesk</Link></h1>
        </div>
        <nav>
          <ul>
            <li><a href=""><Link to='/service'> Gallery</Link></a></li>
            <li><a href=""><Link to='/booking'> ViewList</Link></a></li>
            <li><a href=""><Link to='/bookfinal'> Booking</Link></a></li>
            <li><a href=""> <Link to='/profile'>Profile</Link></a></li>
            <li><a href=""> <Link to='/login'>Login</Link></a></li>
          </ul>
        </nav>
        </div>
      </div>

      
    
  );
}

export default Header;