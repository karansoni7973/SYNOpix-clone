import React from 'react';
import minimalAreaImage from '../../assets/images/min-area.jpg'; // Adjust the path to your image

const HomeMinimalArea = () => {
    return (
        <section className="min-area">
            <div className="container">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-lg-6">
                        <div className="img">
                            <img className="thumparallax-down" src={minimalAreaImage} alt="Dream Innovate Implement" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-lg-6 valign">
                        <div className="content">
                            <h4 className="color-font">Dream. Innovate. Implement.</h4>
                            <p className="wow txt" data-splitting>
                                At SYNOpix, we believe that innovation begins with a dream.
                                It takes vision and imagination to create something truly unique and game-changing.
                                That's why we encourage our team and clients to dream big and think outside the box.
                            </p>
                            <br />
                            <p className="wow txt" data-splitting>
                                But a dream is only the beginning. To make it a reality, you need to innovate. We leverage the latest technologies, tools, and methodologies to design solutions that meet the needs of today's fast-paced and ever-changing market. We challenge ourselves to constantly push the boundaries of what's possible and create unforgettable user experiences that are not only effective but also beautiful and intuitive.
                            </p>
                            <br />
                            <p className="wow txt" data-splitting>
                                So if you're ready to dream, innovate, and implement, we're here to help you every step of the way. Let's work together to create something truly amazing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMinimalArea;