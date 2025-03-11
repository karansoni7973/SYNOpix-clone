import React, { useEffect } from "react";

const Branding = () => {

  return (
    <section className="clients sub-bg pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                {[1, 2, 3, 4].map((num, index) => (
                  <div key={index} className="col-lg-3 brands">
                    <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <a href="#0" className="link" data-splitting>
                          www.Vie.com
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;