import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import your portfolio images
import portfolio1 from '../../assets/images/portfolio/1.jpg';
import portfolio2 from '../../assets/images/portfolio/2.jpg';
import portfolio3 from '../../assets/images/portfolio/3.jpg';
import portfolio4 from '../../assets/images/portfolio/4.jpg';
import portfolio5 from '../../assets/images/portfolio/5.jpg';
import portfolio6 from '../../assets/images/portfolio/6.jpg';
import portfolio7 from '../../assets/images/portfolio/7.jpg';

const HomePortfolio = () => {
  const portfolioItems = [
    { id: 1, img: portfolio2, title: 'StepBuck', link: 'https://play.google.com/store/apps/details?id=com.stepbuck.app', category: 'Mobile App UI/UX Design' },
    { id: 2, img: portfolio1, title: 'Ek Inch', link: 'https://www.figma.com/file/nQ87l8E1e7Qh60x6deFfcS/ekinch', category: 'Mobile App UI/UX Design' },
    { id: 3, img: portfolio3, title: 'Finayo', link: 'https://www.figma.com/file/5eIOZnbOer6SrkYfTLqJo9/borrower-management-loan-app', category: 'Mobile App UI/UX Design' },
    { id: 4, img: portfolio4, title: 'Bhrigu', link: 'case-study/packaging.pdf', category: 'Branding and Graphic Design' },
    { id: 5, img: portfolio5, title: 'Instabatch', link: 'https://www.figma.com/file/8rGro3QQXzlkwzpKZoUIz1/instabatch_app', category: 'Mobile App UI/UX Design' },
    { id: 6, img: portfolio6, title: 'Secneural', link: 'https://secneural.com/', category: 'Website Design' },
    { id: 7, img: portfolio7, title: 'Groovey', link: 'https://www.figma.com/file/BuC1qm9V6XgB5FO4fqgRci/groovey-app', category: 'Mobile App UI/UX Design' },
  ];

  return (
    <section className="work-carousel2 metro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
              <h3 className="wow color-font">A selection of featured projects from our extensive portfolio</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <Swiper
              modules={[Navigation]}
              speed={1000}
              loop={true}
              spaceBetween={30}
              navigation={{
                nextEl: '.next-ctrl',
                prevEl: '.prev-ctrl',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="portfolio-swiper"
            >
              {portfolioItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="content">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="300"></div>
                          <img src={item.img} alt={item.title} />
                        </span>
                      </div>
                    </a>
                    <div className="cont">
                      <h6><a href="project-details2.html">{item.category}</a></h6>
                      <h4><a href="project-details2.html">{item.title}</a></h4>
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;