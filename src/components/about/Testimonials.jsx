// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import client1 from '/src/assets/images/clients/1.jpg';
// import client2 from '/src/assets/images/clients/2.jpg';
// import client3 from '/src/assets/images/clients/3.jpg';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: `The team from SYNOpix is great to work with for design websites. They spend time to understand the clients tech requirements and also the User experience required. I have had a smooth experience working with them on...`,
//       image: client1,
//       name: 'Sushant Sharma',
//       role: 'Co-founder, Secneural LLC'
//     },
//     {
//       text: `Our experience with SYNOpix was absolutely excellent. The team was professional, skilled, and ready to help in every stage of our mobile app project. Team was always available for last minute discussions and changes, and very efficient with timelines.`,
//       image: client2,
//       name: 'Sanjay Singh',
//       role: 'Director, EkInch'
//     },
//     {
//       text: `It was a pleasure dealing with SYNOpix. Their team was very forthcoming and helpful every step of the way. I would strongly recommend their services to anyone wishing to work with them.`,
//       image: client3,
//       name: 'Rakesh Peerannawar',
//       role: 'Founder, Groovey'
//     }
//   ];

//   return (
//     <section className="block-sec" data-scroll-index="4">
//       <div className="background bg-img pt-100 pb-0 parallaxie" 
//            style={{ backgroundImage: "url('/img/bg-vid.jpg')" }}
//            data-overlay-dark="5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="vid-area">
//                 <span className="text">Client Area</span>
//               </div>
//             </div>
//             <div className="col-lg-5 offset-lg-1">
//               <div className="testim-box">
//                 <div className="head-box">
//                   <h6 className="wow fadeIn" data-wow-delay=".5s">Our Clients</h6>
//                   <h4 className="wow fadeInLeft" data-wow-delay=".5s">What Client's Say?</h4>
//                 </div>
                
//                 <Swiper
//                   modules={[Navigation, Autoplay]}
//                   spaceBetween={30}
//                   loop={true}
//                   autoplay={{ delay: 5000 }}
//                   navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                   }}
//                   className="slic-item"
//                 >
//                   {testimonials.map((testimonial, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="item wow fadeInUp" data-wow-delay=".5s">
//                         <p>{testimonial.text}</p>
//                         <div className="info">
//                           <div className="img">
//                             <div className="img-box">
//                               <img src={testimonial.image} alt={testimonial.name} />
//                             </div>
//                           </div>
//                           <div className="cont">
//                             <div className="author">
//                               <h6 className="author-name">{testimonial.name}</h6>
//                               <span className="author-details">{testimonial.role}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}

//                   {/* Navigation Controls */}
//                   <div className="swiper-button-next swiper-nav-ctrl next-ctrl">
//                     <i className="ion-ios-arrow-right"></i>
//                   </div>
//                   <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl">
//                     <i className="ion-ios-arrow-left"></i>
//                   </div>
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import client1 from '/src/assets/images/clients/1.jpg';
import client2 from '/src/assets/images/clients/2.jpg';
import client3 from '/src/assets/images/clients/3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WOW from 'wowjs';

const Testimonials = () => {
  const testimonials = [
    {
            text: `The team from SYNOpix is great to work with for design websites. They spend time to understand the clients tech requirements and also the User experience required. I have had a smooth experience working with them on...`,
            image: client1,
            name: 'Sushant Sharma',
            role: 'Co-founder, Secneural LLC'
          },
          {
            text: `Our experience with SYNOpix was absolutely excellent. The team was professional, skilled, and ready to help in every stage of our mobile app project. Team was always available for last minute discussions and changes, and very efficient with timelines.`,
            image: client2,
            name: 'Sanjay Singh',
            role: 'Director, EkInch'
          },
          {
            text: `It was a pleasure dealing with SYNOpix. Their team was very forthcoming and helpful every step of the way. I would strongly recommend their services to anyone wishing to work with them.`,
            image: client3,
            name: 'Rakesh Peerannawar',
            role: 'Founder, Groovey'
          }
  ];

 
  return (
    <section className="block-sec" data-scroll-index="4">
      <div className="background bg-img pt-100 pb-0 parallaxie" 
           style={{ backgroundImage: "url('/img/bg-vid.jpg')" }}
           data-overlay-dark="5">
        <div className="container">
          <div className="row">
            {/* ... same structure */}

            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">Our Clients</h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">What Client's Say?</h4>
                </div>

                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  className="slic-item"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className={`item wow fadeInUp`} data-wow-delay="0.3s">
                        {/* ... same item content */}
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Pagination */}
                  <div className="swiper-pagination"></div>

                  {/* Navigation */}
                  <div className="swiper-button-next swiper-nav-ctrl next-ctrl">
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl">
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;