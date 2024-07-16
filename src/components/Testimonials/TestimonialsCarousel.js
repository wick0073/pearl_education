import React, { useState } from 'react';
import '../../css/Testimonials/Testimonials.css';
import Button from '../Button';

const testimonialsData = [
  { id: 1, name: 'Justin Wilde', text: 'Great teaching service! The lessons are engaging, and have really helped me understand the material better.', photo: 'path/to/photo1.jpg', date: 'June 2024', role: 'Parent' },
  { id: 2, name: 'Jane Smith', text: 'Highly recommend!', photo: 'path/to/photo2.jpg', date: 'May 2024', role: 'Student' },
  { id: 3, name: 'Sam Wilson', text: 'Fantastic experience!', photo: 'path/to/photo3.jpg', date: 'April 2024', role: 'Parent' },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonialsData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonialsData.length - 1 : current - 1);
  };

  const handleMainButtonClick = () => {
    alert('Main button clicked!');
  };

  return (
    <div className="carousel-container">
      <h2 className="testimonials-heading">Take a look at what our clients say about us!</h2>
      <Button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </Button>
      <div className="carousel-slide">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <div className="testimonial-card">
                <img src={testimonial.photo} alt={testimonial.name} className="profile-photo" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h3 className="testimonial-name">{testimonial.name}, {testimonial.role}</h3>
                <p className="testimonial-date">{testimonial.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </Button>
      <div className="main-button-container">
        <Button className="main-button" onClick={handleMainButtonClick}>
          Main Button
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
