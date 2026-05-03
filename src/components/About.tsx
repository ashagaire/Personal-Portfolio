import React, { useState } from "react";
import profileImage from "../assets/img1.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Slide } from "@mui/material";
import { useSharedInView } from "../hooks/useSharedInView";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const { ref, inView } = useSharedInView();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-title">
        <Typography variant="h2">{t("aboutMe")}</Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 ">
        <div id="text-section">
          <Slide direction="right" in={inView} timeout={1000}>
            <div>
              <div id="about-info" className=" py-4">
                <Typography variant="h4" className="about-text-style">
                  {t("aboutParagraph1")}
                </Typography>
              </div>
              <hr className="border-t border-gray-300 my-2" />
              <div id="about-description">
                <Typography variant="body2" className="about-text-style-2">
                  {isExpanded ? (
                    <>
                      {t("aboutParagraph2a")}
                      <br />
                      <br />
                      {t("aboutParagraph2b")}
                      <br />
                      <br />
                      {t("aboutParagraph2c")}
                      <br />
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="text-blue-500"
                      >
                        {t("readLess")}
                      </button>
                    </>
                  ) : (
                    <>
                      {t("aboutParagraph2ReadLess")}
                      <br />
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="text-blue-500"
                      >
                        {t("readMore")}
                      </button>
                    </>
                  )}
                </Typography>
              </div>
            </div>
          </Slide>

          <hr className="border-t border-gray-300 my-4 block lg:hidden" />
        </div>

        <div className="px-4 sm:px-4 py-4">
          <Slide direction="left" in={inView} timeout={1000}>
            <div className="relative w-fit h-[400px] rounded-lg overflow-hidden shadow-lg flex items-center justify-center mx-auto">
              <img
                src={profileImage}
                alt="Profile"
                className="h-[500px] w-auto object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 flex items-center justify-center py-4">
                <div className="grid grid-cols-3 gap-10 m-0">
                  <div className="flex items-center justify-center">
                    <a
                      href="https://asha-gaire.medium.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons-list"
                    >
                      <FontAwesomeIcon
                        icon={faMedium}
                        className="medium-icon"
                      />
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href="https://github.com/ashagaire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons-list"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/in/asha-gaire-2b532217b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons-list"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
