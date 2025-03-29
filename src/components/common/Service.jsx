import React from "react";

const Service = () => {
  const services = [
    {
      icon: "bi bi-phone",
      title: "Web and Mobile App",
      items: [
        "UI/UX Design",
        "Responsive Website",
        "Mobile App (Android & iOS)",
        "Product Dashboard",
        "Prototype and Wireframe",
        "(Motion) Animation Graphic",
        "Product Flow",
      ],
    },
    {
      icon: "bi bi-lightning",
      title: "Graphic Design",
      items: [
        "Logo & Identity Design",
        "Poster and Infographic",
        "Illustration",
        "Printed Literature",
        "Packaging & POS",
        "Flyer Design",
      ],
    },
    {
      icon: "bi bi-palette",
      title: "Branding",
      items: [
        "Business Brochure Design",
        "Corporate PPT Design",
        "Brand Guidelines Design",
        "Corporate Styling",
        "Consultancy & Support",
        "Trends & Insights",
      ],
    },
    {
      icon: "bi bi-display",
      title: "Media Advertising",
      items: [
        "Creation of a Concept",
        "Banner Advertising",
        "Video Clips",
        "SMM, Facebook, Instagram",
        "Adwords, Accents, Youtube",
        "Online & Offline Advertising",
      ],
    },
  ];

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Suite of Services
              </h6>
              <h3 className="wow color-font">
                We help to create strategies, design & branding.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 items md-mb30 service-card">
              <div className="item wow fadeIn " data-wow-delay=".3s">
                <span className="icon">
                  <i className={`icon color-font ${service.icon}`}></i>
                </span>
                <h5>{service.title}</h5>
                <div className="service_option">
                  <ul>
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a href="/services" className="more-stroke">
                  <span></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
