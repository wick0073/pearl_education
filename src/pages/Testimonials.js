import React from 'react';
import Footer from '../components/footer';
import TestimonialsCarousel from '../components/Testimonials/TestimonialsCarousel';
import '../css/Testimonials/Testimonials.css';

const Testimonials = () => {
  return (
    <>
      <div>
        <h1 className='titleBar'>Testimonials</h1>
        <TestimonialsCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
