import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleSignOut = () => {
    // Perform sign-out operations here
    console.log('User signed out');
    // Example: Redirect to login page or perform actual sign-out logic
     window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <Link to="/" className="nav-item">
          <li>Home</li>
        </Link>
        <Link to="/ledstrip" className="nav-item">
          <li>LED Strip</li>
        </Link>
        <Link to="/switches" className="nav-item">
          <li>Switches</li>
        </Link>
        <Link to="/cameras" className="nav-item">
          <li>Cameras</li>
        </Link>
        <Link to="/temperature" className="nav-item">
          <li>Temperature</li>
        </Link>
        <Link to="/power" className="nav-item">
          <li>Power</li>
        </Link>
        <button className="sign-out" onClick={handleSignOut}>
          Sign Out
        </button>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;

