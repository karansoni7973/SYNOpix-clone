import React, { useEffect, useRef, useState } from "react";
import synoLogo from "/src/assets/images/syno-logo.svg";
import $ from "jquery";
import "scrollIt";

const MenuBar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  let didScroll = false;
  let lastScrollTop = 0;
  const delta = 5;

  useEffect(() => {
    const wind = $(window);
    const navbar = $("#navi");
    const hamenu = $(".hamenu");

    const handleScroll = () => {
      didScroll = true;
      setIsScrolled(wind.scrollTop() > 50); // Change background when scrolled 50px
    };

    const hasScrolled = () => {
      if (!navbarRef.current) return;

      let st = wind.scrollTop();

      if (Math.abs(lastScrollTop - st) <= delta) return;

      lastScrollTop = st;
    };

    wind.on("scroll", handleScroll);

    const interval = setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    return () => {
      wind.off("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div
        id="navi"
        ref={navbarRef}
        className={`topnav ${isScrolled ? "scrolled" : ""}`}
      >
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
    </div>
  );
};

export default MenuBar;
