import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-wrapper">
            
            <ul className="navbar-list">
              <li className="navbar-item"><a href="#" className="navbar-link">Customer Care</a></li>
              <li className="navbar-item"><a href="#" className="navbar-link">My Account</a></li>
              <li className="navbar-item"><a href="#" className="navbar-link">My Cart</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
