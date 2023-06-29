import React from 'react';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="header">
        <h1>Pawsome Poultry</h1>
      </div>
      <div className="content">
        <p>At Pawsome Poultry, we offer premium chicken jerky treats for your beloved dogs. Made with high-quality ingredients and packed with flavor, our jerky treats are a healthy and delicious choice for your furry friends.</p>
        <p>Shop now and give your dogs a tasty and nutritious treat they'll love!</p>
        <a href="#" className="cta-button">Shop Now</a>
      </div>
      <div className="footer">
        &copy; 2023 Pawsome Poultry. All rights reserved.
      </div>
    </div>
  );
}

export default App;
