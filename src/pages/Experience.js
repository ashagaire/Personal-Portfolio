import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorklIcon from "@material-ui/icons/Work";
import { Link } from 'react-router-dom'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="08/2024 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Frontend developer Internship at Codecontrol Oy, Pori
          </h3>
          <p>
          Designing web applications layout with Figma.
          Frontend development in React Typescript with Tailwind CSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="03/2024 - 09/2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            LearnIT - Coding and Finnish Language at BearIT Tampere
          </h3>
          <p>
            Building projects with JavaScript and ReactJS. Working with modern
            software developments tools and Cloud services.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="02/2024 - 03/2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Frontend developer intern at Tuspe Design Oy
          </h3>
          <p>Develope web applications using SvelteKit and Tailwind CSS.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="08/2023 - 01/2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Research Internship at SAMK Pori
          </h3>
          <p>
            Data analysis and implementing machine learning Models in synthetic
            LIBS dataset.
            <br />
            Designing web apps in ReactJS
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="02/2023 - 03/2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Research Internship at SAMK Pori
          </h3>
          <p>
            Data analysis and implementing machine learning Models in synthetic
            LIBS dataset.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="04/2022 - 05/2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">Suomen Kieli</h3>
          <p>Sataedu Rauma, Finland</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="03/2020 - 10/2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Technical Documentation (Python)
          </h3>
          <p>
            Major contribution in chapters "Data Wrangling" and " Model
            Development and Evaluation" in Book "Hands-On Exploratory Data
            Analysis with Python eBook" by Packt Pusblication.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="04/2019 - 01/2020 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Softedge Nepal Pvt. Ltd. (.Net MVC)
          </h3>
          <p>
            Web Developer
            <br />
            Worked with web based application in ASP .Net MVC framework
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
            Bachelor of Science in Computer Science and Information Technology
            (B.Sc. CSIT)
          </h3>
          <p>
            Tribhuvan University
            <br />
            Butwal, Nepal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">High School</h3>
          <p>Tilottama Campus Butwal, Nepal</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2 className="referance-title"> References</h2>

      <div className="referances">
        <ol className="list">
          <li className="item">
            <h3> BearIT OY <Link to="https://bearit.fi/" target="_blank" className="custom-link">bearit.fi </Link></h3>
            <span>
              <b>Teemu Karhu </b>
              <br />
              CEO & Founder
              <br />
              <Link to="mailto:teemu.karhu@bearit.fi" target="_blank" className="custom-link">teemu.karhu@bearit.fi </Link>
              <br />
               <Link to="tel:+358443375775" target="_blank" className="custom-link">+358 44 337 5775 </Link>
            </span>
          </li>

          <li className="item">
            
            <h3> Codecontrol Oy <Link to="https://www.codecontrol.fi/" target="_blank" className="custom-link">codecontrol.fi </Link></h3>
            
            
            <span>
              <b>Jari Ruusunen </b> <br />
              CEO
              <br />
               <Link to="mailto:jari.ruusunen@codecontrol.fi" target="_blank" className="custom-link">jari.ruusunen@codecontrol.fi </Link>
              <br />
              <Link to="tel:+358443300965" target="_blank" className="custom-link">+358 44 330 0965 </Link>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
