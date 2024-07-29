
import React from 'react';
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import "../../css/ContactUs/contactUsCarousel.css"

const ContactUsCarousel = () => {


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
    <div className="left-content">
      <div className="slider-container">
        <div className="swiper">
          <div
            className="swiper-wrapper"
            aria-live="polite"
            style={{
              cursor: 'grab',
              transitionDuration: '0ms',
              transform: 'translate3d(-445px, 0px, 0px)',
              transitionDelay: '0ms',
            }}
          >
            <div
              className="swiper-slide"
              role="group"
              aria-label="1 / 5"
              data-swiper-slide-index="0"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(240px, 0px, -400px) rotateX(0deg) rotateY(20deg) scale(1)',
                zIndex: -1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src="Logo.png" alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Suki Wick</h3>
                    <div className="service">Web Development</div>
                  </div>
                </div>
                <div className="title">Great Service!</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan
                  eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.
                </div>
              </div>
            </div>

            <div
              className="swiper-slide"
              role="group"
              aria-label="2 / 5"
              data-swiper-slide-index="1"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(120px, 0px, -200px) rotateX(0deg) rotateY(10deg) scale(1)',
                zIndex: 0,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src="person3.jpg" alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Suki Wick</h3>
                    <div className="service">Web Development</div>
                  </div>
                </div>
                <div className="title">Great Service!</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan
                  eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.
                </div>
              </div>
            </div>

            <div
              className="swiper-slide "
              role="group"
              aria-label="3 / 5"
              data-swiper-slide-index="2"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
                zIndex: 1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src="person3.jpg" alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Suki Wick</h3>
                    <div className="service">Web Development</div>
                  </div>
                </div>
                <div className="title">Great Service!</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan
                  eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.
                </div>
              </div>
            </div>

            <div
              className="swiper-slide "
              role="group"
              aria-label="4 / 5"
              data-swiper-slide-index="3"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(-120px, 0px, -200px) rotateX(0deg) rotateY(-10deg) scale(1)',
                zIndex: 0,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src="person3.jpg" alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Suki Wick</h3>
                    <div className="service">Web Development</div>
                  </div>
                </div>
                <div className="title">Great Service!</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan
                  eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.
                </div>
              </div>
            </div>

            <div
              className="swiper-slide"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style={{
                transitionDuration: '0ms',
                transform: 'translate3d(-240px, 0px, -400px) rotateX(0deg) rotateY(-20deg) scale(1)',
                zIndex: -1,
              }}
            >
              <div className="review">
                <div className="reviewTopSection">
                  <img src="person3.jpg" alt="Person 1" className="person" />
                  <div className="reviewTopSectionLeftCol">
                    <div className="starsText">
                      4.6<div className="stars"> ★</div>
                    </div>
                    <h3>Suki Wick</h3>
                    <div className="service">Web Development</div>
                  </div>
                </div>
                <div className="title">Great Service!</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lacus nec sem semper accumsan
                  eget non tortor. Proin sagittis dui venenatis, pellentesque nisi hendrerit, iaculis felis.
                </div>
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
      </div>
    </div>
  );
};

export default ContactUsCarousel;
