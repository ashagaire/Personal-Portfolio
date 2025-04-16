// src/components/Experience.tsx
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, CardHeader, Typography, Stack } from "@mui/material";
import profileImage from "../assets/img1.jpg";
import { useTranslation } from "react-i18next";
import { projectsList } from "../data/projects";

const Projects = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, img: profileImage, title: "Stack" },
    { id: 2, img: profileImage, title: "Item 2" },
    { id: 3, img: profileImage, title: "Item 3" },
    { id: 4, img: profileImage, title: "Item 3" },
    // { id: 5, img: profileImage, title: "Item 2" },
  ];

  return (
    <section className="section">
      <div className="section-title">
        <Typography variant="h2">{t("projects")}</Typography>
      </div>
      <div className="container mx-auto py-4 sm:py-6 px-4  sm:px-6 lg:px-0 lg:py-10">
        {/* <Box display="flex" flexWrap="wrap" gap={4} justifyContent={"center"}> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsList.map((item) => (
            <Card elevation={5}>
              {/* <CardHeader
                title={item.name}
                className="text-center text-gray-700 font-bold py-0 mb-0"
              /> */}

              <CardContent className="">
                <Typography
                  variant="h4"
                  className=" text-center text-gray-700 font-bold "
                >
                  {item.name}
                </Typography>

                <Box
                  // key={item.id}
                  className="relative overflow-hidden w-auto h-[250px] group  rounded-lg mt-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="zoom-image scale-100 md:scale-100 group-hover:md:scale-[1.5] "
                  />
                  <div className="overlay scale-100 md:scale-0 group-hover:md:scale-100 ">
                    <div className=" px-4 grid grid-cols-1 gap-2 items-center justify-items-center">
                      {/* <Typography>{item.name}</Typography>
                      <hr className="border-t border-gray-200 w-full" /> */}
                      <Typography variant="body2">
                        {" "}
                        {item.description}{" "}
                      </Typography>
                      <hr className="border-t border-gray-200 w-full" />
                      <div className="flex flex-row gap-2  pt-2">
                        {item.stack.map((tool) => (
                          <img
                            src={tool}
                            alt={"alt"}
                            width="30"
                            height="30"
                            className="text-white color-white"
                          />
                        ))}
                      </div>
                      <hr className="border-t border-gray-200 w-full" />
                      <div className="buttons-group grid grid-cols-2 gap-2  pt-2">
                        {/* <CodeIcon className="" />
                        <PublicIcon className="" /> */}
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
                {/* <CardActions className="buttons-group  ">
                  <Typography variant="body1">Web Application</Typography>

                  <div>
                    <Button size="small">CODE</Button>
                    <Button size="small">DEMO</Button>
                  </div>
                </CardActions> */}
              </CardContent>
            </Card>
          ))}
          {/* </Box> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
