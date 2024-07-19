import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <h2>Testimonials</h2>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          emulateTouch={true}
          dynamicHeight={true}
          centerMode={true}
          centerSlidePercentage={60}
        >
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/girl.jpg" alt="Person 1" className="testimonial-image" />
            </div>
            <p className="testimonial-text">"This is an amazing service! Highly recommended."</p>
            <p className="testimonial-name">- Hashan</p>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/person1.jpg" alt="Person 2" className="testimonial-image" />
            </div>
            <p className="testimonial-text">"I had a fantastic experience with the team."</p>
            <p className="testimonial-name">- Hashan</p>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/person3.jpg" alt="Person 3" className="testimonial-image" />
            </div>
            <p className="testimonial-text">"Great support and exceptional results."</p>
            <p className="testimonial-name">- Hashan</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
