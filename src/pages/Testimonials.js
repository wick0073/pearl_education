import React from 'react';
import Footer from '../components/footer';
import TestimonialsCarousel from '../components/Testimonials/TestimonialsCarousel.js';
import '../css/Testimonials/TestimonialsCarousel.css';
import TitleBar from '../components/TitleBar';

const Testimonials = () => {
  return (
    <>
      <div className='BodyBg'>
        
      <TitleBar textColor="#000" colorCode="#f4abc0" titleText="Testimonials"></TitleBar>

      <div className="tesimonialWrapper">
        <TestimonialsCarousel />
      </div>

      </div>

      <Footer />
    </>
  );
};

export default Testimonials;