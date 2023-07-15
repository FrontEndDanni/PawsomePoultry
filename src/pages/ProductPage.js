import React from 'react';

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-section">
        <h2>Cubed Jerky</h2>
        <div className="product-item">
          <img src="https://via.placeholder.com/300" alt="Cubed Jerky" className="product-image" />
          <p className="product-name">Cubed Jerky</p>
          <p className="product-price">$9.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-section">
        <h2>Jerky Strips</h2>
        <div className="product-item">
          <img src="https://via.placeholder.com/300" alt="Jerky Strips" className="product-image" />
          <p className="product-name">Jerky Strips</p>
          <p className="product-price">$12.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
