// src/components/Home.tsx
import React from 'react';

const Asha = () => {
  return (
    <div id="asha" className="welcome-hero">
      <div className="welcome-hero-overlay"></div>
      <div className="welcome-hero-content">
        <h2 className="welcome-hero-title">
          hi <span className="text-blue-500">,</span> i am <br />
          <span className="text-blue-500">browny</span> <br />
          star<span className="text-blue-500">.</span>
        </h2>
        <p className="welcome-hero-subtitle">
          ui/ux designer and web developer
        </p>
        <a
          href="assets/download/browney.txt"
          download
          className="welcome-hero-button"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Asha;
