import React, { useEffect, useState } from "react";
import "../../assets/css/loading.css"; // Import external CSS for animations

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    // Animate the progress bar to 100%
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) return oldProgress + 1;
        clearInterval(interval);
        setTimeout(() => setExpand(true), 500); // Delay before expanding
        return 100;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-text">
        {["S", "Y", "N", "O", "P", "I", "X"].map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>

      <div className={`progress-bar ${expand ? "expand" : ""}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Loading;
