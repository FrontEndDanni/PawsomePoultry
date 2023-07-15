import React from 'react';

function HomePage() {
    return (
        <>
        <div className="app">
     
      <div className="content">
        <p>At Pawsome Poultry, we offer premium chicken jerky treats for your beloved dogs. Made with high-quality ingredients and packed with flavor, our jerky treats are a healthy and delicious choice for your furry friends.</p>
        <p>Shop now and give your dogs a tasty and nutritious treat they'll love!</p>
        <div className="cta">
          <a href="/productpage" className="cta-button">Shop Now</a>
        </div>
        
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

  <div className="divider"></div>

        <div className="reviews">
          <h2>Why do dogs love our treats?</h2>
          <div className="review">
            <div className="review-profile">
              <img src="https://via.placeholder.com/150" alt="Reviewer 1" className="profile-image" />
            </div>
            <div className="review-content">
              <p className="review-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor nulla a velit pulvinar, sed rutrum enim feugiat."</p>
              <p className="review-author">- Reviewer 1, Dog Name</p>
            </div>
          </div>
          <div className="review">
            <div className="review-profile">
              <img src="https://via.placeholder.com/150" alt="Reviewer 2" className="profile-image" />
            </div>
            <div className="review-content">
              <p className="review-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor nulla a velit pulvinar, sed rutrum enim feugiat."</p>
              <p className="review-author">- Reviewer 2, Dog Name</p>
            </div>
          </div>
          <div className="review">
            <div className="review-profile">
              <img src="https://via.placeholder.com/150" alt="Reviewer 3" className="profile-image" />
            </div>
            <div className="review-content">
              <p className="review-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor nulla a velit pulvinar, sed rutrum enim feugiat."</p>
              <p className="review-author">- Reviewer 3, Dog Name</p>
            </div>
          </div>
          <div className="cta">
          <a href="#" className="cta-button">See More Reviews</a>
        </div>
        </div>
      
        
      </div>
      <div className="footer">
        &copy; 2023 Pawsome Poultry. All rights reserved.<br></br>
        <a href="about-us.html">About Us</a> • 
        <a href="contact-us.html"> Contact Us</a> • 
        <a href="shipping-returns.html"> Shipping & Returns</a>
      </div>
    </div>
        </>
    );
}

export default HomePage;