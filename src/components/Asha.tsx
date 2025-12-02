import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

const Asha = () => {
  const { t } = useTranslation();

  return (
    <div className="relative  text-center text-white">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        <span className="backdrop-blur-[1px]">{t("hi")} </span>
        <span className="text-[#d92cf9]">,</span>
        <span className="backdrop-blur-[1px]">{t("iAm")} </span>
        <br />
        <span className="text-[#d92cf9] backdrop-blur-[1px]">Asha</span> <br />
        <span className="backdrop-blur-[1px]">Gaire</span>
        <span className="text-[#d92cf9]">.</span>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl mt-10 backdrop-blur-[1px]">
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
          rel="noopener noreferrer"
          className="mt-4"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/asha-gaire-2b532217b"
          target="_blank"
          rel="noopener noreferrer"
          className="icons-list mt-4"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Asha;
