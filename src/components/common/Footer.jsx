import React from 'react';
import dasssoftLogo from '/src/assets/images/dasssoft.png';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="item md-mb50">
              <div className="title">
                <img src={dasssoftLogo} className="fot_logo" alt="Dasssoft Logo" />
              </div>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">|</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item md-mb50">
              <ul>
                <li>
                  <div className="cont">
                    <div className="social">
                      <a href="#0" title="Linkedin"><i className="fab fa-linkedin"></i></a>
                      <a href="#0" title="Facebook"><i className="fab fa-facebook"></i></a>
                      <a href="#0" title="Twitter"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p className="ftt_copy">© 2022 - 2023 by Synopix LLC, 6065 Roswell Road, Suite 450, Atlanta, GA 30328-4011</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;