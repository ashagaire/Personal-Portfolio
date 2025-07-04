import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { skillsList, languageSkillsList } from "../data/skills";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="skills">
      <div className="section-title">
        <Typography variant="h2">{t("skills")}</Typography>
      </div>
      <Typography variant="h6" className="skills-section-title py-2">
        {t("programmingLanguagesAndTools")}
      </Typography>
      <div className="container mx-auto py-4 sm:py-6 px-4  ">
        <div className="grid grid-cols-3 sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {skillsList.map((skill, index) => (
            <Card
              key={index}
              className="  relative group overflow-hidden transition-transform duration-300 hover:scale-105"
              sx={{
                backgroundColor: "#f9f9f9",
                boxShadow: "none",

                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <CardContent className="skill-card">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  width="30"
                  height="30"
                  className="mx-auto"
                />
                <div className="skill-alt-text">{skill.alt}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Typography variant="h6" className="skills-section-title">
        {t("languageSkills")}
      </Typography>
      <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {languageSkillsList.map((skill, index) => (
            <Card
              key={index}
              className="relative group overflow-hidden transition-transform duration-300 hover:scale-105"
              sx={{
                backgroundColor: "#f9f9f9",
                boxShadow: "none",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
              }}
            >
              <CardContent className="skill-card">
                <ReactCountryFlag
                  countryCode={skill.src}
                  svg
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
                <div className="skill-alt-text">{skill.alt}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
