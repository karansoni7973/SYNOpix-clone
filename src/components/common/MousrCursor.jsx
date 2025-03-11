import React, { useEffect } from "react";

const MouseCursor = () => {
  useEffect(() => {
    const cursorInner = document.createElement("div");
    const cursorOuter = document.createElement("div");

    cursorInner.className = "cursor-inner mouse-cursor";
    cursorOuter.className = "cursor-outer mouse-cursor";

    document.body.appendChild(cursorInner);
    document.body.appendChild(cursorOuter);

    let mouseX = 0,
      mouseY = 0,
      isMoving = false;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      isMoving = true;
    };

    const updateCursor = () => {
      if (isMoving) {
        cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        isMoving = false;
      }
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(updateCursor);

    // Handle hover effects on links and buttons
    document.addEventListener("mouseenter", (event) => {
      if (event.target instanceof HTMLElement && event.target.matches("a, .cursor-pointer")) {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseleave", (event) => {
      if (event.target instanceof HTMLElement && event.target.matches("a, .cursor-pointer")) {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      }
    });

    // Ensure cursor is visible
    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursorInner);
      document.body.removeChild(cursorOuter);
    };
  }, []);

  return null; // No UI element needed
};

export default MouseCursor;
