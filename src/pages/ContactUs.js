import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import emailjs from 'emailjs-com';
import Button from '../components/Button';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../css/ContactUs.css'
import '../components/TitleBar'
import TitleBar from '../components/TitleBar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_pfllvgy', 'template_qhlwk0l', formData, 'J-w-M_av2o0C9GXEI')
      .then((response) => {
        setResponseMessage('Message sent successfully!');
      })
      .catch((error) => {
        setResponseMessage('Failed to send the message. Please try again later.');
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      speed: 600,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 600,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      },
      on: {
        click(event) 
        {
          swiper.slideTo(this.clickedIndex);
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }, []);

  return (
    <>
      <div>
        <TitleBar colorCode="#14ACA0" titleText="Contact Us"></TitleBar>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <span className="requiredIcon">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter Your Full Name"
              />
            </label>
            <label>
              <span className="requiredIcon">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter Your Email Address"
              />
            </label>
            <label>
              <span className="requiredIcon">&nbsp;&nbsp;</span>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter Your Contact Number"
              />
            </label>
            <label>
              <span className="requiredIcon">*</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter Subject"
              />
            </label>
            <label>
              <span className="requiredIcon">*</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter Message"
              ></textarea>
            </label>

            <div className="submitContainer">
              <Button type="submit">Send</Button>
            </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>

        <div className="outerReviewContainer">
        <TitleBar colorCode="#14ACA0" titleText="Reviews"></TitleBar>
          {/* <div className="reviewContainer">
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

           
          </div> */}



          <div className="left-content">
            <div className="slider-container">
            
              <div className="swiper">
                <div className="swiper-wrapper" aria-live="polite" style={{cursor: 'grab',transitionDuration: '0ms',transform: 'translate3d(-445px, 0px, 0px)',transitionDelay: '0ms',}}>
                  
                  <div className="swiper-slide" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style={{ transitionDuration: '0ms',transform: 'translate3d(240px, 0px, -400px) rotateX(0deg) rotateY(20deg) scale(1)',zIndex: -1,}}>
                   
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

                  <div className="swiper-slide" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style={{ transitionDuration: '0ms', transform: 'translate3d(120px, 0px, -200px) rotateX(0deg) rotateY(10deg) scale(1)', zIndex: 0, }} >
                   
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

                  <div className="swiper-slide " role="group" aria-label="3 / 5" data-swiper-slide-index="2" style={{ transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)', zIndex: 1, }} >
                    
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

                  <div className="swiper-slide " role="group" aria-label="4 / 5" data-swiper-slide-index="3" style={{ transitionDuration: '0ms', transform: 'translate3d(-120px, 0px, -200px) rotateX(0deg) rotateY(-10deg) scale(1)', zIndex: 0,}}>
                    
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

                  <div className="swiper-slide" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style={{ transitionDuration: '0ms', transform: 'translate3d(-240px, 0px, -400px) rotateX(0deg) rotateY(-20deg) scale(1)', zIndex: -1, }} >
                    
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

                <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                </div>

                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>

                
              </div>
              <div className="submitContainer">
                  <Button redirectTo="/Testimonials">View more</Button>
                </div>
            </div>
        </div>


          
        </div>

        

      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
