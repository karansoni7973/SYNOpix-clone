import React from 'react';
import aboutImage1 from '../../assets/images/01.jpg';
import aboutImage2 from '../../assets/images/02.jpg';

const HomeAbout = () => {
    return (
        <div className="about section-padding agency position-re" data-scroll-index="1">
            <div className="container">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-lg-6">
                        <div className="imgsec md-mb50">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="item">
                                        <div className="imgone big-bord wow fadeInDown" data-wow-delay=".8s">
                                            <img className="thumparallax-down" src={aboutImage1} alt="About Us" />
                                        </div>
                                        <div className="exp">
                                            <h2 className="nmb-font">12</h2>
                                            <h6>Years Of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <div className="imgtwo big-bord wow fadeInUp" data-wow-delay=".6s">
                                            <img className="thumparallax" src={aboutImage2} alt="About Us" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-lg-6 valign">
                        <div className="content">
                            <div className="sub-title">
                                <h6>About Us</h6>
                            </div>
                            <h3 className="main-title wow" data-splitting>Company Overview</h3>
                            <p className="wow txt" data-splitting>
                                At SYNOpix, we believe that good design is more than just aesthetics.
                                It's about understanding your users and creating solutions that meet their needs. Our team of experts has years of experience in UX design
                                and is committed to delivering innovative solutions that exceed your expectations.
                                <br /><br />
                                We value collaboration, creativity, and empathy, and we work closely with our clients to ensure that their vision becomes a reality.
                            </p>

                            {/* Feature Boxes */}
                            <div className="ftbox mt-30">
                                <ul>
                                    <li className="wow fadeIn" data-wow-delay=".3s">
                                        <span className="icon color-font pe-7s-gleam"></span>
                                        <h6>Pixel <br /> Perfect</h6>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </li>
                                    <li className="space wow fadeIn" data-wow-delay=".5s">
                                        <span className="icon color-font pe-7s-paint-bucket"></span>
                                        <h6>Creative <br /> Design</h6>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </li>
                                    <li className="wow fadeIn" data-wow-delay=".8s">
                                        <span className="icon color-font pe-7s-medal"></span>
                                        <h6>High <br /> Performance</h6>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="line bottom right"></div>
        </div>
    );
};

export default HomeAbout;