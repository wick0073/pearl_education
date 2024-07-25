import Footer from '../components/footer';
import Button from '../components/Button';

import '../css/ContactUs/ContactUs.css'

import TitleBar from '../components/TitleBar.js';
import ContactUsCarousel from '../components/ContactUs/ContactUsCarousel.js';
import ContactUsForml from '../components/ContactUs/ContactUsForm.js'

const ContactUs = () => {
 

  

  return (
    <>
      <div>
        <TitleBar textColor="#000000" colorCode="#14ACA0" titleText="Contact Us"></TitleBar>

        <ContactUsForml/>

        <div className="outerReviewContainer">

            <TitleBar colorCode="#14ACA0" titleText="Reviews"></TitleBar>
          

            <ContactUsCarousel/>
            
            <div className="submitContainer">
                <Button redirectTo="/Testimonials">View more</Button>
            </div>

        </div>

        

      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
