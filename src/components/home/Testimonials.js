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
          centerMode={true}
          centerSlidePercentage={60}
        >
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/girl.jpg" alt="Person 1" className="testimonial-image" />
            </div>
            <p className="testimonial-text">""Pearl Education has been a game-changer for my daughter. The personalized one-on-one sessions have helped her grasp complex math concepts with ease. Thank you, Pearl Education!""</p>
            <p className="testimonial-name"> — Ravi G, Parent of Grade 12 Student</p>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/person1.jpg" alt="Person 2" className="testimonial-image" />
            </div>
            <p className="testimonial-text">""I was really struggling with Physics until I joined Pearl Education. The tutor was patient and explained everything in a way that made sense to me. I ended up scoring an A in my final exams!""</p>
            <p className="testimonial-name">- — Rahil, Grade 11 Student</p>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-image-container">
              <img src="/person3.jpg" alt="Person 3" className="testimonial-image" />
            </div>
            <p className="testimonial-text">""The tutors at Pearl Education are incredibly knowledgeable and dedicated. My son’s computer science skills have improved significantly. He’s now confident in coding and even created his first app!""</p>
            <p className="testimonial-name">— Ephraim, Parent of Grade 12 Student</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
