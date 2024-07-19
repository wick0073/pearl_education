import React, { useEffect } from 'react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/footer';
import Menu from '../components/menu';
import '../css/Home/home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonials from '../components/home/Testimonials';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  // useEffect(() => {
  //   $('.owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     items: 1,
  //     navText: ['<', '>'],
  //     dots: true,
  //     autoHeight: true,
  //   });
  // }, []);

  return (
    <>
          <div className="hero-banner-container">
      <div className="hero-banner">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
        >
          <div className="slide">
            <h2>Special Offer 1</h2>
            <p>Details about the offer.</p>
          </div>
          <div className="slide">
            <h2>Special Offer 2</h2>
            <p>Details about the offer.</p>
          </div>
          <div className="slide">
            <h2>Special Offer 3</h2>
            <p>Details about the offer.</p>
          </div>
        </Carousel>
      </div>
    </div>

      <div className="services">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Short description of Service 1.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 1.</div>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Short description of Service 2.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 2.</div>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Short description of Service 3.</p>
            <button className="service-btn">Learn More</button>
            <div className="more-info">Additional information about Service 3.</div>
          </div>
        </div>
      </div>

      <div className="why-choose">
        <h2>Why Choose Pearl Education</h2>
        <div className="why-choose-cards">
          <div className="why-choose-card">
            <h3>IELTS</h3>
            <p>Enhance your English language proficiency and test-taking strategies.</p>
            <h3>CELPIP</h3>
            <p>Get targeted instruction and practice to excel in the CELPIP exam.</p>
            <h3>Comprehensive Subject Coverage</h3>
          </div>
          <div className="why-choose-card">
            <h3>Test Preparation</h3>
            <p>From foundational subjects to advanced topics, we’ve got you covered:</p>
            <h3>English</h3>
            <p>Improve your language skills with our expert guidance in grammar, writing, and literature analysis.</p>
            <h3>Mathematics</h3>
            <p>Master math concepts from basic arithmetic to advanced calculus with our simplified and engaging tutoring.</p>
          </div>
          <div className="why-choose-card">
            <h3>Proven Success</h3>
            <p>Our students consistently achieve high academic performance and gain the confidence to pursue their educational and career goals. Join our community of successful learners and start your journey towards excellence today.</p>
          </div>
        </div>
      </div>

      <div className="embark-journey">
        <h2>Embark Your Journey</h2>
        <div className="embark-journey-card">
          <p>Unlock your full potential with Pearl Education, your trusted partner in academic excellence. We provide personalized, high-quality tutoring for students from Lower Kindergarten (LKG) to undergraduate levels. Whether you need help with core subjects or are preparing for important language proficiency exams, Pearl Education is here to guide you every step of the way.</p>
          <button className="contact-btn" >Get in Touch</button>
        </div>
      </div>


    <div>
  
      <Testimonials />
   
    </div>

      <Footer />
    </>
  );
};

export default Home;
