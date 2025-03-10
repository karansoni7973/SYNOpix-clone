import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    document.body.classList.add('loading');
    return () => document.body.classList.remove('loading');
  }, []);

  return (
    <div className="loading">
      {['s', 'y', 'n', 'o', 'p', 'i', 'x'].map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
      <div id="preloader"></div>
    </div>
  );
};

export default Loading;