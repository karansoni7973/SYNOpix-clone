import React from 'react';
import aboutImg from '../../assets/images/slid/about.jpg'; // Adjust the path based on your project structure

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mb-50 text-center">
              <h1 className="color-font fw-700">
                Our dedicated team of creatives is bursting with talent,
                experience and passion for what we do.
              </h1>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src={aboutImg} alt="About SYNOpix" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
