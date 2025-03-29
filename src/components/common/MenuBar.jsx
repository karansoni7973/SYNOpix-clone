import React, { useEffect, useRef, useState } from "react";
import synoLogo from "/src/assets/images/syno-logo.svg";
import $ from "jquery";
import "scrollIt";

const MenuBar = () => {
  const navbarRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  let didScroll = false;
  let lastScrollTop = 0;
  const delta = 5;

  useEffect(() => {
    const wind = $(window);
    const navbar = $("#navi");
    const hamenu = $(".hamenu");

    // Hide/Show Navbar on Scroll
    const handleScroll = () => {
      didScroll = true;
    };

    const hasScrolled = () => {
      if (!navbarRef.current) return;

      let st = wind.scrollTop();
      let navbarHeight = navbar.outerHeight();

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
        navbar.css("top", "-100px"); // Hide navbar when scrolling down
      } else {
        if (st + wind.height() < $(document).height()) {
          navbar.css("top", "0"); // Show navbar when scrolling up
        }
      }

      lastScrollTop = st;
    };

    wind.on("scroll", handleScroll);

    const interval = setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    // Menu Toggle Functionality
    const toggleMenu = () => {
      hamenu.toggleClass("open");

      if (hamenu.hasClass("open")) {
        hamenu.animate({ left: 0 }, 300);
      } else {
        hamenu.animate({ left: "-100%" }, 300);
      }
    };

    $(".topnav .menu-icon").on("click", toggleMenu);

    return () => {
      wind.off("scroll", handleScroll);
      $(".topnav .menu-icon").off("click", toggleMenu);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div id="navi" ref={navbarRef} className="topnav">
        <div className="container">
          <a className="logo" href="/">
            <img src={synoLogo} alt="Synopix Logo" />
          </a>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </div>

      {/* Hidden Menu */}
      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  {[
                    { href: "/", text: "Home", nm: "01." },
                    { href: "/about", text: "About Us", nm: "02." },
                    { href: "/services", text: "Services", nm: "03." },
                    { href: "/case-study", text: "Case Study", nm: "04." },
                    { href: "/contact", text: "Contact Us", nm: "05." },
                  ].map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredItem(item.text)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        opacity: hoveredItem && hoveredItem !== item.text ? 0.3 : 1, // Instant dimming effect
                        fontWeight: hoveredItem === item.text ? "bold" : "normal", // Only bold, no color change
                      }}
                    >
                      <div className="o-hidden">
                        <a href={item.href} className="link">
                          <span className="nm">{item.nm}</span>
                          {item.text}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Office Address</h6>
                  <p>6065 Roswell Road, Suite 450, Atlanta, GA 30328-4011</p>
                </div>
                <div className="item">
                  <h6>Email Contact</h6>
                  <p>
                    <a href="mailto:hello@synopix.com">hello@synopix.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
