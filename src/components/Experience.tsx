import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work"; 
import { Typography } from "@mui/material";
import {experianceList} from '../data/experiances'
const Experience = () => {
  return (
    <div className="section">
      <div className="section-title">
      <Typography variant="h2" >Experience</Typography>
        </div>
      <div>
      <VerticalTimeline lineColor="#3e497a">
      {experianceList.map((event, index) => (
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={{ background: "#9b0101", color: "#fff" }}
          icon={<WorkIcon />}
          key={index}
        >
          <h3 className="Vertical-timeline-element-titel">
          {event.title}
          </h3>
          <Typography>
          {event.description}
          </Typography>
        </VerticalTimelineElement>
        ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
