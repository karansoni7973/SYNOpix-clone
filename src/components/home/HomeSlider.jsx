import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../../assets/images/slid/01.jpg';
import slide2 from '../../assets/images/slid/02.jpg';
import slide3 from '../../assets/images/slid/03.jpg';
import slide4 from '../../assets/images/slid/04.jpg';

const HomeSlider = () => {
  

  return (
    <header className="slider slider-prlx text-center" data-scroll-index="0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={1000}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="parallax-slider"
      >
        {/* Slides */}
        {[slide1, slide2, slide3, slide4].map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="bg-img valign" 
              style={{ backgroundImage: `url(${slide})` }}
              data-overlay-dark="0"
            >
              <div className="container">
                <div className="row text-left">
                  <div className={`col-lg-${index === 0 ? '8' : '7'} col-md-${index === 0 ? '10' : '9'}`}>
                    <div className="caption center mt-30 ml-100">
                      {renderSlideContent(index)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Controls */}
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination top botm"></div>
      </Swiper>

      {/* Social Icons (outside Swiper) */}
      <div className="social-icon">
        <a href="#0" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="#0" title="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#0" title="Twitter"><i className="fab fa-twitter"></i></a>
      </div>
    </header>
  );
};

// Helper function for slide content
const renderSlideContent = (index) => {
  const slides = [
    <h1 key={0}>
      Crafting Unforgettable <span className="color-font">User Experiences</span> <br /> 
      that Drive <span className="color-font">Business</span> Growth
    </h1>,
    <h1 key={1}>
      Transforming Complex <span className="color-font">Problems</span> <br /> 
      into <span className="color-font">Beautiful,</span> Intuitive <span className="color-font">Solutions</span>
    </h1>,
    <h1 key={2}>
      Expert <span className="color-font">UX Design</span> <br /> 
      to Help You Connect with Your <span className="color-font">Audience</span> and Achieve {' '}
      <span className="color-font">Your Goals</span>
    </h1>,
    <h1 key={3}>
      Experience the Power of <span className="color-font">User-Centered</span> <br /> 
      Design <span className="color-font">with SYNOpix</span>
    </h1>
  ];

  return slides[index];
};

export default HomeSlider;