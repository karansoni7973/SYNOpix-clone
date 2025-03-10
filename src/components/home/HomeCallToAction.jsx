import React from 'react';
import patternBg from '../../assets/images/patrn.svg'; // Import the background image

const HomeCallToAction = () => {
    return (
        <section className="call-action section-padding bg-img" style={{ backgroundImage: `url(${patternBg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <div className="content sm-mb30">
                            <h2 className="wow" data-splitting>
                                Let’s Talk <br />
                                <b className="back-color">
                                    <a href="mailto:hello@synopix.com">hello@synopix.com</a>
                                </b>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCallToAction;