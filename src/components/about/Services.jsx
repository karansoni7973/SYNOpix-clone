import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Services = () => {
  const services = [
    {
      icon: 'pe-7s-phone',
      title: 'Web and Mobile App',
      text: 'Transforming Ideas into Innovative Web and Mobile Apps',
      delay: 100
    },
    {
      icon: 'ion-ios-bolt-outline',
      title: 'Graphic Designing',
      text: 'Elevate Your Brand with Stunning Graphic Design Solutions',
      delay: 200
    },
    {
      icon: 'pe-7s-paint-bucket',
      title: 'Branding',
      text: 'Crafting Unique Brand Identities that Stand Out in the Market',
      delay: 300
    },
    {
      icon: 'pe-7s-display1',
      title: 'Media Advertising',
      text: 'Targeted Media Advertising Solutions that Drive Business Growth',
      delay: 400
    }
  ];

  return (
    <section className="services bords lficon section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
              <h3 className="wow color-font">We are a new digital product development agency</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              text={service.text}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, text, delay }) => {
  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 24 },
    delay: delay
  });

  return (
    <animated.div className="col-lg-6" style={springs}>
      <div className="item-box">
        <div className="icon-container">
          <span className={`icon ${icon}`}></span>
        </div>
        <div className="cont2">
          <h6 className="service-title">{title}</h6>
          <p className="service-description">{text}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Services;