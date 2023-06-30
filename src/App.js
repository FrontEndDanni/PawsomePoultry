import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <br></br>
      <div className="header">
        <h1>Pawsome Poultry</h1>
      </div>
      <div className="content">
        <p>At Pawsome Poultry, we offer premium chicken jerky treats for your beloved dogs. Made with high-quality ingredients and packed with flavor, our jerky treats are a healthy and delicious choice for your furry friends.</p>
        <p>Shop now and give your dogs a tasty and nutritious treat they'll love!</p>
        <div className="image-container">
          <div className="image-wrapper">
            <img src="https://picsum.photos/200/200" alt="Placeholder Image" className="placeholder-image" />
            <p className="image-caption">100% natural!</p>
          </div>
          <div className="image-wrapper">
            <img src="https://picsum.photos/200/200" alt="Placeholder Image" className="placeholder-image" />
            <p className="image-caption">100% American-made!</p>
          </div>
          <div className="image-wrapper">
            <img src="https://picsum.photos/200/200" alt="Placeholder Image" className="placeholder-image" />
            <p className="image-caption">100% tasty!</p>
          </div>
        </div>
        <div className="cta">
          <a href="#" className="cta-button">Shop Now</a>
        </div>
      </div>
      <div className="footer">
        &copy; 2023 Pawsome Poultry. All rights reserved.<br></br>
        <a href="about-us.html">About Us</a> |
        <a href="contact-us.html">Contact Us</a> |
        <a href="shipping-returns.html">Shipping & Returns</a>
      </div>
    </div>
  );
}

export default App;
