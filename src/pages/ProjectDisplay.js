import React from 'react'
import '../styles/ProjectDisplay.css'
import { projectList } from '../helper/ProjectList'
import { useParams } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'

function ProjectDisplay() {
    const{id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills</b>: {project.skills}
        </p>
        <GitHubIcon />
        
    </div>
  )
}

export default ProjectDisplay