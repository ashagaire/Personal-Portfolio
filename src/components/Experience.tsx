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
          iconStyle={{ background: "#d92cf9", color: "#fff" }}
          icon={<WorkIcon />}
          key={index}
        >
          <Typography variant="h4" className='text-gray-700'>
          {event.title}
          </Typography>
          {/* need margin top */}
          <Typography  className="!font-normal text-gray-800"  style={{ lineHeight: '1.6', overflowWrap: 'break-word',textAlign: 'justify'}}>
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
