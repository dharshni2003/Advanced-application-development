import React from 'react'
import { Link } from 'react-router-dom'
import "./Adminside.css"
function Adminside() {
  return (
    <div>
    <div className="sidebar">
      <div className="sidebar-heading">
        <h3>Admin Dashboard</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to='/adminvenue'>Venue</Link>
        </li>
        <li>
        <Link to='/admindeco'>Decoration</Link>
        </li>
        <li>
        <Link to='/adminevent'>Event</Link>
        </li>
        <li>
        <Link to='/adminmenu'>Menu</Link>
        </li>
        <li>
        <Link to='/adminaddon'> Addon</Link>
        </li>
        <li>
        <Link to='/adminchart'> Chart</Link>
        </li>
        <li>
        <Link to='/login'> LOGOUT</Link>
        </li>
      </ul>
    </div>
    <div className="Admin-line">
    
    </div>
    </div>
  )
}

export default Adminside