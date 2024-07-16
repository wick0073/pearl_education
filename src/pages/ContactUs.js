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
        <TitleBar colorCode="#14ACA0" titleText="Contact Us"></TitleBar>

        <ContactUsForml/>

        <div className="outerReviewContainer">

            <TitleBar colorCode="#14ACA0" titleText="Reviews"></TitleBar>
            
              <div className="reviewContainer">
                <div className="reviews">
                  <div className="review">
                    <div className="reviewTopSection">
                      <img src="person1.jpg" alt="Person 1" className="person" />
                      <div className="reviewTopSectionLeftCol">
                        <div className="starsText">4.6<div className="stars"> ★</div></div>
                        <h3>Suki Wick</h3>
                        <div className="service">Web Development</div>
                      </div>
                    </div>
                    <div className="title">Great Service!</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                  </div>

                  <div className="review">
                    <div className="reviewTopSection">
                      <img src="person2.jpg" alt="Person 1" className="person" />
                      <div className="reviewTopSectionLeftCol">
                        <div className="starsText">4.6<div className="stars"> ★</div></div>
                        <h3>Suki Wick</h3>
                        <div className="service">Web Development</div>
                      </div>
                    </div>
                    <div className="title">Great Service!</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                  </div>

                  <div className="review">
                    <div className="reviewTopSection">
                      <img src="person3.jpg" alt="Person 1" className="person" />
                      <div className="reviewTopSectionLeftCol">
                        <div className="starsText">4.6<div className="stars"> ★</div></div>
                        <h3>Suki Wick</h3>
                        <div className="service">Web Development</div>
                      </div>
                    </div>
                    <div className="title">Great Service!</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                  </div>

                </div>

              
              </div>


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
