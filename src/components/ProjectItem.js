import React from 'react'
import { useNavigate } from 'react-router-dom'
import GitHubIcon   from "@material-ui/icons/GitHub";
import { Link } from 'react-router-dom'

function ProjectItem({id, name, image , skills , webPage , gitHub}) {
    const navigate = useNavigate()
  return (
    <div className='projectItem'>
      <Link  style={{ textDecoration: 'none', color: 'black' }} to={webPage} target="_blank">
        <div className='projectItem-redirect-project' >    
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
        </div>  
        </Link>
        <hr  className="line"/>
        <span className='project-tools'>
        <b>Tools:</b> {skills}
        </span>
        <hr  className="line"/>
        <span className='project-tools'>
        <b>About:</b> {skills}
        </span>
        <hr  className="line"/>
        <Link to={gitHub} target="_blank">
        <div className='redirect-github'>
        <GitHubIcon />
        </div>
        </Link>
        
    </div>
    

  )
}

export default ProjectItem