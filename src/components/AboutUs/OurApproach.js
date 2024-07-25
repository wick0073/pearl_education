import React from 'react';
import '../../css/AboutUs/OurApproach.css';

const OurApproach = () => {
  const circles = [
    {
      heading: 'Personalized Learning',
      description: 'We understand that every student is unique, and our one-on-one tutoring sessions are designed to cater to individual learning styles and needs. This personalized approach ensures that each student receives the attention and support necessary for their academic success.'
    },
    {
      heading: 'Experienced Tutors',
      description: 'Our team of highly qualified tutors brings extensive knowledge and expertise to each session. They are passionate about teaching and committed to helping students achieve their full potential.'
    },
    {
      heading: 'Flexible Learning Modes',
      description: 'To accommodate the diverse needs of our students, we offer both online and offline one-on-one tutoring options. Whether you prefer the convenience of online sessions or the traditional in-person experience, we have the right solution for you.'
    },
    {
      heading: 'Supportive Environment',
      description: 'We create a positive and encouraging learning atmosphere that motivates students to strive for excellence. Our supportive environment helps build confidence and fosters a love for learning.'
    },
    {
      heading: 'Proven Results',
      description: 'Our students consistently achieve high academic performance and gain the confidence to pursue their educational and career goals. We take pride in their success and are dedicated to continuing our tradition of excellence.'
    }
  ];

  return (
    <div className="our-approach-section">
      <h1>Our Approach</h1>
      <div className="our-approach-container">
        <div className="circle-row">
          {circles.map((circle, index) => (
            <div className="circle" key={index}>
              <div className="circle-heading">{circle.heading}</div>
              <div className="circle-description">{circle.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
