import React, { useState } from 'react';
import '../../css/Testimonials/Testimonials.css';
import Button from '../../components/Button';
import placeholder from '../../images/placeholder.jpg';  // Import the placeholder image
import pearl from '../../images/pearl.png';  // Import the pearl image

const testimonialsData = [
  {
    photo: placeholder,
    text: '“Great teaching service! The lessons are engaging, and have really helped me understand the material better.”',
    name: 'Justin Wilde, Parent',
    date: 'June 2024',
    rating: 5  // Add rating for each testimonial
  },
  {
    photo: placeholder,
    text: '“Excellent support and teaching methods. My child has improved significantly. Excellent support and teaching methods. My child has improved significantly. Excellent support and teaching methods. My child has improved significantly. Excellent support and teaching methods. My child has improved significantly. Excellent support and teaching methods. My child has improved significantly. Excellent support and teaching methods. My child has improved significantly.”',
    name: 'Sarah Johnson, Parent',
    date: 'July 2024',
    rating: 4
  },
  {
    photo: placeholder,
    text: '“Excellent support and teaching methods. My child has improved significantly.”',
    name: 'Sarah Johnson, Parent',
    date: 'July 2024',
    rating: 4
  },
  {
    photo: placeholder,
    text: '“Excellent support and teaching methods. My child has improved significantly.”',
    name: 'Sarah Johnson, Parent',
    date: 'July 2024',
    rating: 4
  },
  {
    photo: placeholder,
    text: '“Excellent support and txcellent support and teaching methods. Mxcellent support and teaching methods. Mxcellent support and teaching methods. Mxcellent support and teaching methods. Meaching methods. My child has improved significantly.”',
    name: 'Sarah Johnson, Parent',
    date: 'July 2024',
    rating: 4
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <h2 className="testimonials-heading">Take a look at what our clients say about us!</h2>
      <div className="carousel-wrapper">

        <button className="carousalControl carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-slide" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`slide ${index === current ? 'active' : ''}`}
            >
              <div className="testimonial-card">
                <img
                  src={testimonial.photo}
                  alt="Profile"
                  className="profile-photo"
                />
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-date">{testimonial.date}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={pearl}
                      alt="Pearl"
                      className={`pearl ${i < testimonial.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousalControl carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
        
        
        
      </div>

      {/* <div class="responsiveControls">
          <button className="responsiveControl carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="responsiveControl carousel-button next" onClick={nextSlide}>
          &#10095;
          </button>
       </div> */}

      
      <div className="navigation-dots">
          {testimonialsData.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`dot ${dotIndex === current ? 'active' : ''}`}
              onClick={() => setCurrent(dotIndex)}
            ></span>
          ))}
        </div>
      <Button className="contact-us-button" redirectTo="/contact-us">Contact Us</Button>
    </div>
  );
};

export default TestimonialsCarousel;
