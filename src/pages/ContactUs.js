import React from 'react';
import Footer from '../components/footer';
import { useState } from 'react';
import emailjs from 'emailjs-com';


  

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
      //emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
        emailjs.send('service_pfllvgy', 'template_qhlwk0l', formData, 'J-w-M_av2o0C9GXEI')
          .then((response) => {
            setResponseMessage('Message sent successfully!');
            
          })
          .catch((error) => 
            {
            setResponseMessage('Failed to send the message. Please try again later.');
           
            console.error('Error:', error);
          });

      };
  

  

  return (

<>

    <div>
      <h1 class='titleBar'>Contact Us</h1>
      
      <div className="contact-form-container">

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
        <span class="requiredIcon">*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter Your Full Name'
          />
        </label>
        <label>
        <span class="requiredIcon">*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter Your Email Address'
          />
        </label>
        <label>
        <span class="requiredIcon">&nbsp;&nbsp;</span>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder='Enter Your Contact Number'
          />
        </label>
        <label>
        <span class="requiredIcon">*</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder='Enter Subject'
          />
        </label>
        <label>
        <span class="requiredIcon">*</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Enter Message'
          ></textarea>
        </label>

        <div class="submitContainer">
            <button type="submit">Send</button>
        </div>
        

      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>

    </div>

    <Footer />
    
</>
  );
};

export default ContactUs;