import React from 'react';
import '../../css/AboutUs/OurCommitment.css';
import ourCommitment from "../../images/about-us-our-commitment.png";

const OurCommitment = () => {
  return (
    <div className="our-commitment-section">
      <div className="our-commitment-grid">
        <div className="our-commitment-image">
          <img src={ourCommitment} alt="Our Commitment" />
        </div>
        <div className="our-commitment-content">
          <h1>Our Commitment</h1>
          <p>
            At Pearl Education, we are committed to nurturing the intellectual and personal growth of our students. We believe that education is the key to unlocking a world of opportunities, and we are dedicated to providing the guidance and support needed to succeed. Join us at Pearl Education and embark on a journey towards academic excellence and lifelong learning.
          </p>
          <p>
            Contact us today to learn more about our one-on-one tutoring services and how we can help you achieve your academic goals!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
