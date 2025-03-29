import React, { useEffect } from "react";

const MouseCursor = () => {
  useEffect(() => {
    console.log("MouseCursor component mounted"); // Debugging

    // Create cursor elements
    const cursorInner = document.createElement("div");
    const cursorOuter = document.createElement("div");

    cursorInner.className = "cursor-inner mouse-cursor";
    cursorOuter.className = "cursor-outer mouse-cursor";

    document.body.appendChild(cursorInner);
    document.body.appendChild(cursorOuter);

    // Debugging: Check if elements are created
    console.log("Cursor elements added:", cursorInner, cursorOuter);

    let mouseX = 0, mouseY = 0;

    // Mouse move event
    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      
      cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Ensure cursor is visible
    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    // Handle hover effects
    const handleMouseEnter = (event) => {
      if (event.target.closest("a, button, .cursor-pointer")) {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      }
    };

    const handleMouseLeave = (event) => {
      if (event.target.closest("a, button, .cursor-pointer , i ")) {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    // Cleanup function
    return () => {
      console.log("Cleaning up MouseCursor"); // Debugging
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.body.removeChild(cursorInner);
      document.body.removeChild(cursorOuter);
    };
  }, []);

  return null;
};

export default MouseCursor;
