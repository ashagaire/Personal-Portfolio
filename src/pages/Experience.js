import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorklIcon from '@material-ui/icons/Work';
// import '../styles/Experience.css'
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010-2014"
          iconStyle={{ background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
             My High School , Butwal, Nepal
          </h3>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010-2014"
          iconStyle={{ background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
             My High School , Butwal, Nepal
          </h3>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2010-2014"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
             My High School , Butwal, Nepal
          </h3>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2010-2014"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
             My High School , Butwal, Nepal
          </h3>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2010-2014"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
             My High School , Butwal, Nepal
          </h3>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
        
    </div>
  )
}

export default Experience