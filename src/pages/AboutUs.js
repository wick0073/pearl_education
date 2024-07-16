import React from 'react';
import Footer from '../components/footer';
import TitleBar from '../components/TitleBar';
import Welcome from '../components/AboutUs/Welcome';
import OurStory from '../components/AboutUs/OurStory';
import OurServices from '../components/AboutUs/OurServices';
import OurApproach from '../components/AboutUs/OurApproach';
import OurCommitment from '../components/AboutUs/OurCommitment';




const AboutUs = () => {
  return (
    <>
      <div>
        <TitleBar colorCode="#F7962D" titleText="About Us" />
        <h1 class='titleBar'>About Us</h1>


        
      </div>
      <Welcome />
      <OurStory />
      <OurServices />
      <OurApproach />
      <OurCommitment />
      <Footer />
      
    
    </>
  );
};

export default AboutUs;