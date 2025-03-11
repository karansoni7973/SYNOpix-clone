import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const CallToAction = () => {
  const springs = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 20 }
  });

  return (
    <section className="call-action section-padding bg-img">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <animated.div style={springs} className="content">
              <h2>
                Let’s Talk <br />
                <b className="back-color">
                  <a href="mailto:hello@synopix.com">hello@synopix.com</a>
                </b>
              </h2>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;