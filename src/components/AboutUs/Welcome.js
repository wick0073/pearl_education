import React from 'react';
import '../../css/AboutUs/Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1>Welcome to Pearl Education!</h1>
      </div>
      <div className="welcome-content">
        <div className="text-container left">
          <p>
            At Pearl Education, we unlock every student's potential with personalized, high-quality tutoring for all levels.
          </p>
        </div>
        <div className="text-container right">
          <p>
            We also offer focused IELTS and CELPIP exam preparation to help students achieve their language proficiency goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
