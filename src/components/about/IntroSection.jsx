import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const IntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 220, friction: 24 },
    delay: 300
  });

  const textSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 220, friction: 24 },
    delay: 500
  });

  return (
    <section className="intro-section section-padding pb-0" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <animated.div style={headingSpring} className="htit sm-mb30">
              <h4 className="wow fadeInUp" data-wow-delay=".3s">Who We Are?</h4>
            </animated.div>
          </div>
          
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <animated.div style={textSpring} className="text">
              <p className="wow txt mb-30" data-splitting>
                At SYNOpix, we believe that good design is more than just aesthetics.
                It's about understanding your users and creating solutions that meet their needs.
                Our team of experts has years of experience in UX design and is committed to
                delivering innovative solutions that exceed your expectations.
              </p>
              <p className="wow txt" data-splitting>
                We value collaboration, creativity, and empathy, and we work closely with
                our clients to ensure that their vision becomes a reality.
              </p>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;