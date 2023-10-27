import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { projectList } from '../helper/ProjectList'
import { blogList } from '../helper/Blogs'
import { contributionList } from '../helper/Contributions'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
          return (
          <ProjectItem id={idx} name={project.name} image={project.image} />
          )
            
        })}
      </div>
      <h1>My Blog posts</h1>
      <div className='projectList'>
        {blogList.map((blog, idx) => {
          return (
          <ProjectItem id={idx} name={blog.name} image={blog.image} />
          )
            
        })}
      </div>
      <h1>My Contribution</h1>
      <div className='projectList'>
        {contributionList.map((contribution, idx) => {
          return (
          <ProjectItem id={idx} name={contribution.name} image={contribution.image} />
          )
            
        })}
      </div>
    </div>
  );
}

export default Projects;