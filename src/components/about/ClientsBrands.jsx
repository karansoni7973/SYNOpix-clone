import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Import client logos
import secneural from '../../assets/images/secneural.png';
import grovery from '../../assets/images/grovery.png';
import stepbuck from '../../assets/images/stepbuck.png';
import finayo from '../../assets/images/finayo.png';
import tripbuilder from '../../assets/images/tripbuilder.png';
import ekinch from '../../assets/images/ekinch.png';

const ClientsBrands = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { logo: secneural, alt: 'Secneural' },
    { logo: grovery, alt: 'Grovery' },
    { logo: stepbuck, alt: 'StepBuck' },
    { logo: finayo, alt: 'Finayo' },
    { logo: tripbuilder, alt: 'TripBuilder' },
    { logo: ekinch, alt: 'EkInch' }
  ];

  return (
    <section className="clients section-padding" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".3s">Our Global Clients</h6>
              <h3 className="wow color-font" data-wow-delay=".5s">Our Clients</h3>
              <p className="wow fadeInUp" data-wow-delay=".7s">
                Our area of practice is quite wide: design, graphics, branding, development.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row bord">
              {clients.map((client, index) => (
                <ClientLogo 
                  key={index}
                  logo={client.logo}
                  alt={client.alt}
                  delay={index * 100}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLogo = ({ logo, alt, delay, inView }) => {
  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 220, friction: 24 },
    delay
  });

  return (
    <animated.div 
      className="col-md-4 col-6 brands"
      style={springs}
    >
      <div className="item wow fadeIn" data-wow-delay={`${delay}ms`}>
        <div className="img">
          <img src={logo} alt={alt} className="client-logo" />
        </div>
      </div>
    </animated.div>
  );
};

export default ClientsBrands;