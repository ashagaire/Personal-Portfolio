import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import { Typography } from "@mui/material";
import { experianceList } from "../data/experiances";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="section">
      <div className="section-title">
        <Typography variant="h2">{t("experience")}</Typography>
      </div>
      <div>
        <VerticalTimeline lineColor="#3e497a" animate={false}>
          {experianceList.map((event, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: "#d92cf9", color: "#fff" }}
              icon={<WorkIcon />}
              key={index}
            >
              <Typography variant="h4" className="text-gray-700">
                {t(event.title)}
              </Typography>
              <Typography
                className="!font-normal text-gray-700"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  overflowWrap: "break-word",
                  textAlign: "left",
                }}
              >
                {t(event.description)}
              </Typography>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
