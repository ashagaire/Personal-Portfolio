// src/components/Home.tsx
import React from 'react';
import welcomeBanner from '../assets/welcome-banner.jpg';

const Asha = () => {
  return (
    <div
      id="asha"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${welcomeBanner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(31,44,108,0.65)]"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          hi <span className="text-blue-500">,</span> i am <br />
          <span className="text-blue-500">browny</span> <br />
          star<span className="text-blue-500">.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-4">
          ui/ux designer and web developer
        </p>
        <a
          href="assets/download/browney.txt"
          download
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Asha;
