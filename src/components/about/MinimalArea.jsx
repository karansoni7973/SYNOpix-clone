import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import minimalImage from '../../assets/images/min-area.jpg'; // Adjust path as needed

const MinimalArea = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { num: 1, title: "Our Mission", text: "Empowering Businesses with Innovative Digital Solutions" },
    { num: 2, title: "Our Goals", text: "Driving Success for Our Clients" },
    { num: 3, title: "Why Us?", text: "Innovative Solutions for Your Business Needs" }
  ];

  return (
    <section className="min-area sub-bg" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img src={minimalImage} alt="About SYNOpix" className="thumparallax-down" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <animated.h4 
                className="color-font mb-40"
                style={useSpring({
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  config: { tension: 220, friction: 24 },
                  delay: 300
                })}
              >
                About us.
              </animated.h4>
              
              <animated.p 
                className="mb-30"
                style={useSpring({
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  config: { tension: 220, friction: 24 },
                  delay: 500
                })}
              >
                At SYNOpix, we believe that good design is more than just aesthetics. 
                It's about understanding your users and creating solutions that meet their needs. 
                Our team of experts has years of experience in UX design and is committed to 
                delivering innovative solutions that exceed your expectations.
              </animated.p>

              <ul className="feat">
                {features.map((feature, index) => (
                  <FeatureItem 
                    key={index}
                    num={feature.num}
                    title={feature.title}
                    text={feature.text}
                    delay={300 + (index * 200)}
                    inView={inView}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ num, title, text, delay, inView }) => {
  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 220, friction: 24 },
    delay
  });

  return (
    <animated.li style={springs}>
      <h6>
        <span className="color-font">{num}</span> {title}
      </h6>
      <p>{text}</p>
    </animated.li>
  );
};

export default MinimalArea;