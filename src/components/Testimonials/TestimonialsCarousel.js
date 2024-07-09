import React, { useState } from 'react';
import '../css/Testimonials/Testimonials.css';

const testimonialsData = [
  { id: 1, name: 'John Doe', text: 'Great service!' },
  { id: 2, name: 'Jane Smith', text: 'Highly recommend!' },
  { id: 3, name: 'Sam Wilson', text: 'Fantastic experience!' },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonialsData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonialsData.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-slide">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <>
                <p>{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default TestimonialsCarousel;
