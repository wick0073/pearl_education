import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/AboutUs/OurServices.css';

const OurServices = () => {
  return (
    <div className="our-services-section">
      <h1>Our Services</h1>
      <div className="our-services-container">
        <div className="carousel-overlay">
          <Carousel 
            autoPlay 
            interval={3000} 
            infiniteLoop 
            showThumbs={false}
            showStatus={false}
            showArrows={true} 
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-prev">
                  &lt;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-next">
                  &gt;
                </button>
              )
            }
          >
            <div className="carousel-slide">
              <div className="carousel-heading">Comprehensive Tutoring</div>
              <div className="carousel-description">
                <h2>English</h2>
                <p>
                  From foundational grammar to advanced literature analysis, our tutors help students improve their language skills and excel in their studies.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Comprehensive Tutoring</div>
              <div className="carousel-description">
                <h2>Mathematics</h2>
                <p>
                  Our math tutors make complex concepts accessible, helping students build a strong foundation in topics ranging from basic arithmetic to advanced calculus.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Comprehensive Tutoring</div>
              <div className="carousel-description">
                <h2>Computer Science</h2>
                <p>
                  We provide in-depth tutoring in programming, coding, and computer fundamentals, equipping students with essential skills for the digital age.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Comprehensive Tutoring</div>
              <div className="carousel-description">
                <h2>Physics</h2>
                <p>
                  Our physics tutors simplify intricate theories and principles, making it easier for students to understand and apply them.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Comprehensive Tutoring</div>
              <div className="carousel-description">
                <h2>Chemistry</h2>
                <p>
                  We break down challenging chemical concepts and reactions, ensuring students can grasp and excel in this crucial science subject.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Test Preparation</div>
              <div className="carousel-description">
                <h2>IELTS</h2>
                <p>
                  Our IELTS courses focus on enhancing language proficiency and test-taking strategies to help students achieve their desired scores.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="carousel-heading">Test Preparation</div>
              <div className="carousel-description">
                <h2>CELPIP</h2>
                <p>
                  Our targeted instruction and practice sessions ensure students are well-prepared to excel in the CELPIP exam.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurServices;