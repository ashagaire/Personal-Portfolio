import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { projectList } from '../helper/ProjectList'



function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
          return (
          <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} webPage={project.site} gitHub={project.github}/>
          )
            
        })}
      </div>
    </div>
  );
}

export default Projects;