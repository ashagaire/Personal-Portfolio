import React from "react";
import welcomeBanner from "../assets/welcome-banner.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

const Asha = () => {
  const { t } = useTranslation();

  return (
    <div
      id="asha"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${welcomeBanner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(31,44,108,0.65)]"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {t("hi")} <span className="text-[#d92cf9]">,</span> {t("iAm")} <br />
          <span className="text-[#d92cf9]">Asha</span> <br />
          Gaire<span className="text-[#d92cf9]">.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-10">
          {t("uiUxDesignerAndWebDeveloper")}
        </p>
        <a
          href="/Resume_Asha_Gaire.pdf"
          download
          className="mt-20 inline-block  bg-[#d92cf9] text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-blue-600 transition"
        >
          {t("downloadResume")}
        </a>
        <div className=" flex justify-center space-x-2">
          <a
            href="https://github.com/ashagaire"
            target="_blank"
            className="mt-4"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/asha-gaire-2b532217b"
            target="_blank"
            className="icons-list mt-4"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Asha;
