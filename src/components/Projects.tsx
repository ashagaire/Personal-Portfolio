import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { projectsList } from "../data/projects";
import { Slide } from "@mui/material";
import { useSharedInView } from "../hooks/useSharedInView";

const Projects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useSharedInView();

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="section-title">
        <Typography variant="h2">{t("projects")}</Typography>
      </div>
      <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6 lg:px-0 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsList.map((item, index) => (
            <Slide direction="up" in={inView} timeout={1000}>
              <Card elevation={5} key={item.id}>
                <CardContent className="">
                  <Typography
                    variant="h4"
                    className=" text-center text-gray-700 font-bold "
                  >
                    {item.name}
                  </Typography>

                  <Box className="relative overflow-hidden w-auto h-[250px] group  rounded-lg mt-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="zoom-image scale-100 md:scale-100 group-hover:md:scale-[1.5] "
                    />
                    <div className="overlay scale-100 md:scale-0 group-hover:md:scale-100 ">
                      <div className=" px-4 grid grid-cols-1 gap-2 items-center justify-items-center">
                        <Typography variant="body2">
                          {" "}
                          {item.description}{" "}
                        </Typography>
                        <hr className="border-t border-gray-200 w-full" />
                        <div className="flex flex-row gap-2  pt-2">
                          {item.stack.map((tool, index) => (
                            <img
                              key={index}
                              src={tool}
                              alt={`stack-${index}`}
                              width="30"
                              height="30"
                              className="text-white color-white"
                            />
                          ))}
                        </div>
                        <hr className="border-t border-gray-200 w-full" />
                        <div className="buttons-group grid grid-cols-2 gap-2  pt-2">
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => window.open(item.github)}
                          >
                            CODE
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => window.open(item.app)}
                          >
                            DEMO
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
