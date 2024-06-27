import React from 'react';
import Footer from '../components/footer';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../components/Button';



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

  // Send the email using EmailJS 
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

  return (
    <>
      <div>
        <h1 className="titleBar">Contact Us</h1>
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


            <div class="outerReviewContainer">
              <h1 class="titleBar">Reviews</h1>
                <div class="reviewContainer">
                    <div className="reviews">


                          <div className="review">  
                            <div class="reviewTopSection">
                              <img src="person1.jpg" alt="Person 1" class="person" />
                              <div class="reviewTopSectionLeftCol">
                                  <div class="starsText">4.6<div className="stars"> ★</div></div>
                                  <h3>Suki Wick</h3>
                                  <div className="service">Web Development</div>
                              </div>  
                            </div>
                            
                            <div className="title">Great Service!</div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                          </div>

                          <div className="review">  
                            <div class="reviewTopSection">
                              <img src="person2.jpg" alt="Person 1" class="person" />
                              <div class="reviewTopSectionLeftCol">
                                  <div class="starsText">4.6<div className="stars"> ★</div></div>
                                  <h3>Suki Wick</h3>
                                  <div className="service">Web Development</div>
                              </div>  
                            </div>
                            
                            <div className="title">Great Service!</div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                          </div>

                          <div className="review">  
                            <div class="reviewTopSection">
                              <img src="person3.jpg" alt="Person 1" class="person" />
                              <div class="reviewTopSectionLeftCol">
                                  <div class="starsText">4.6<div className="stars"> ★</div></div>
                                  <h3>Suki Wick</h3>
                                  <div className="service">Web Development</div>
                              </div>  
                            </div>
                            
                            <div className="title">Great Service!</div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.</div>
                          </div>
                    </div>

                      

                    <div className="submitContainer">
                          <Button redirectTo="/Testimonials">View more</Button>
                    </div>
                    
                </div>
              </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
