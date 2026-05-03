import { ProjectsProps } from "../../data/projects";
import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProjectDetails: React.FC<{ item: ProjectsProps }> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className=" px-4 pt-4  grid grid-cols-1 gap-2 items-center justify-items-center">
      <Typography variant="body2"> {t(item.description)} </Typography>
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
        {item.github && (
          <Button
            size="small"
            variant="contained"
            onClick={() => window.open(item.github)}
          >
            CODE
          </Button>
        )}

        <Button
          size="small"
          variant="contained"
          onClick={() => window.open(item.app)}
        >
          DEMO
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
