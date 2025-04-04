import { useState, useEffect } from "react";
import bgVid from "/src/assets/images/bg-vid.jpg";
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clients = [
    {
      text: `The team from SYNOpix is great to work with for design websites.
      They spend time to understand the clients tech requirements and also the
      User experience required. I have had a smooth experience working with them on...`,
      img: "assets/images/clients/1.jpg",
      name: "Sushant Sharma",
      title: "Co-founder, Secneural LLC",
    },
    {
      text: `Our experience with SYNOpix was absolutely excellent. The team was professional,
      skilled, and ready to help in every stage of our mobile app project. Rajiv was always
      available for last-minute discussions and changes, and very efficient with timelines....`,
      img: "assets/images/clients/2.jpg",
      name: "Sanjay Singh",
      title: "Director, EkInch",
    },
    {
      text: `It was a pleasure dealing with Syskon. Their team was very
      forthcoming and helpful every step of the way. I would strongly recommend their
      services to anyone wishing to work with them.`,
      img: "assets/images/clients/3.jpg",
      name: "Rakesh Peerannawar",
      title: "Founder, Groovey",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="block-sec" data-scroll-index="4">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{
          backgroundImage: `url(${bgVid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Client Area</span>
                <div className="vid-icon"></div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <div className="slic-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="item">
                    <p>{clients[currentIndex].text}</p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src={clients[currentIndex].img} alt="Client" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name">
                            {clients[currentIndex].name}
                          </h6>
                          <span className="author-details">
                            {clients[currentIndex].title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
