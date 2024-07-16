import React from 'react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/footer.js';
import Menu from '../components/menu.js';
import '../css/Home/home.css';

const Home = () => {
  return (

    <>
        <div>
          
            <h1 class='titleBar'>Home</h1>
            {/* <Menu /> */}
            <div className="hero-banner">
              <div className="hero-slide">
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
        </div>

        <Footer />
    </>

  );
};

export default Home;
