import { useEffect } from "react";

const useMouseCursor = () => {
  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    if (!cursorInner || !cursorOuter) return;

    const moveCursor = (event) => {
      const { clientX: x, clientY: y } = event;

      cursorOuter.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(() => {
        cursorInner.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const addHoverEffect = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const removeHoverEffect = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);
};

export default useMouseCursor;