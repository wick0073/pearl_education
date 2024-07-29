import React from 'react';
import Footer from '../components/footer';
import TestimonialsCarousel from '../components/Testimonials/TestimonialsCarousel';
import '../css/Testimonials/Testimonials.css';
import TitleBar from '../components/TitleBar';

const Testimonials = () => {
  return (
    <>
      <div>
        
      <TitleBar textColor="#000" colorCode="#f4abc0" titleText="Testimonials"></TitleBar>

        
        <TestimonialsCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
