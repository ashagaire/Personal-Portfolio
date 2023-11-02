import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorklIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2012-2014"
          iconStyle={{ background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          High School 
          </h3>
          <p >Tilottama Campus Butwal, Nepal</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2014-2019"
          iconStyle={{ background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)
          </h3>
          <p >Tribhuvan University<br/>
          Butwal, Nepal</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="04/2019 - 01/2020 "
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Softedge Nepal Pvt. Ltd. (.Net MVC)
          </h3>
          <p>
            Web Developer<br/>
            Worked with web based application in ASP .Net MVC framework
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="03/2020 - 10/2020"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Technical Documentation (Python) 
          </h3>
          <p  >
            Major contribution in chapters "" in  Book "Hands-On Exploratory Data Analysis with Python eBook" by Packt Pusblication.
            </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="04/2022 - 05/2023"
          iconStyle={{ background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Suomen Kieli 
          </h3>
          <p >Sataedu Rauma, Finland</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="02/2023 - 03/2023"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Research Internship at SAMK Pori
          </h3>
          <p >
            Data analysis and implementing machine learning Models in synthetic LIBS dataset.
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="08/2023 - Prestnt"
          iconStyle={{ background:'#e9d35b', color:'#fff'}}
          icon={<WorklIcon />}
        >
          <h3 className="Vertical-timeline-element-titel">
          Research Internship at SAMK Pori
          </h3>
          <p >
            Data analysis and implementing machine learning Models in synthetic LIBS dataset.<br/>
            Designing web apps in ReactJS
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
      
      <h2 className="referance-title"> References</h2>
        
      <div className='referances'>
          
          <ol className='list'>
            <li className='item'>
              <h3> SAMK Pori</h3>
              <span><b>Toni Aaltonen </b><br/>
              Researcher and Lecture<br/>
              toni.aaltonen@samk.fi<br/>
              +358 447103998
              </span>
            </li>

            <li className='item'>
              <span>
              <b>Juuso Lehtonen </b>  <br/>
              Project Researcher<br/>
              juuso.2.lehtonen@samk.fi<br/>
              +358 442222621
              </span>
            </li>

            <li className='item'>
              <h3> Western Norway University of Applied Sciences </h3>
              <span>
              <b>Suresh Kumar Mukhiya </b>  <br/>
              Ph.D. candidate<br/>
              skmu@hvl.no<br/>
              +47-94430044
              </span>
            </li>
          </ol>
      </div>

      
      
        
    </div>
  )
}


export default Experience

