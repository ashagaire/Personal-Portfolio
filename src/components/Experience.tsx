import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import WorklIcon from "@material-ui/icons/Work";
import WorkIcon from "@mui/icons-material/Work";  // Updated from @material-ui to @mui
// import { useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import {experianceList} from '../data/experiances'
const Experience = () => {
  return (
    <div id="experience" className="min-h-screen experience py-0 bg-white">
      <div className="skill-content py-12">
      <div className="section-heading text-center mb-12">
          <h2 className="text-3xl font-semibold text-uppercase border-b-2 pb-8 border-gray-200">Experience</h2>
        </div>
      <div>
      <VerticalTimeline lineColor="#3e497a">
      {experianceList.map((event, index) => (
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={event.date}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
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
    
    </div>
  );
};

export default Experience;
