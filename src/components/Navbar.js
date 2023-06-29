import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#" className="navbar-link">Customer Care</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">My Account</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">My Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;