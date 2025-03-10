import { useEffect } from "react";
import $ from "jquery";

const Preloader = () => {
  useEffect(() => {
    // Pace Preloader Options
    window.paceOptions = {
      ajax: true,
      document: true,
      eventLag: false,
    };

    const handlePreloader = () => {
      $("#preloader").addClass("isdone");
      $(".loading").addClass("isdone");
    };

    if (window.Pace) {
      window.Pace.on("done", handlePreloader);
    } else {
      setTimeout(handlePreloader, 3000); // Fallback in case Pace is not available
    }

    return () => {
      if (window.Pace) {
        window.Pace.off("done", handlePreloader);
      }
    };
  }, []);

  return (
    <>
      <div className="loading">
        <span>s</span>
        <span>y</span>
        <span>n</span>
        <span>o</span>
        <span>p</span>
        <span>i</span>
        <span>x</span>
      </div>
      <div id="preloader"></div>
    </>
  );
};

export default Preloader;