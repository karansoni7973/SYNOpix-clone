import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const CallToAction = () => {
  

  return (
    <section className="call-action section-padding bg-img">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content">
                <h2 className="wow " data-splitting>
                  Let’s Talk <br />
                  <b className="back-color" >
                    <span> <a href="mailto:hello@synopix.com">hello@synopix.com</a></span>
                  </b>
                </h2> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;