// src/components/Home.tsx
import React from "react";
import welcomeBanner from "../assets/welcome-banner.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          HI <span className="text-[#d92cf9]">,</span> I AM <br />
          <span className="text-[#d92cf9]">Asha</span> <br />
          Gaire<span className="text-[#d92cf9]">.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-10">
          UI/UX Designer And Web Developer
        </p>
        <a
          href="/Resume_Asha_Gaire.pdf"
          download
          className="mt-20 inline-block  bg-[#d92cf9] text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
        <div className="flex items-center justify-center px-10">
          <a href="https://github.com/ashagaire" className="mt-4">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Asha;
