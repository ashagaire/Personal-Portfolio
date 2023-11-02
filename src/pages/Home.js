import React from 'react'
import { useState } from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon   from "@material-ui/icons/GitHub";
import { Link } from 'react-router-dom'
import profile from '../assets/profileic.png'

import '../styles/Home.css'

function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("asha.gaire95@gmail.com").then(
      () => {
        console.log('Email copied to clipboard');
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 1000); 
        // You can add a toast or some other UI indication that the text has been copied
      },
      (error) => {
        console.error('Unable to copy to clipboard. Error:', error);
      }
    );
  };

  return (
    <div className='home'>
      <div className='about'>
        <div className='profile-image'>
        <img src={profile} />
        </div>
        <div className='profile-details' > 
      
        <h2> Hi, I am Asha Gaire</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.<br></br><br></br>
          <span className='prompt-icons'> 
          <EmailIcon onClick={handleCopy} style={{cursor:'pointer'}}/>
            {showMessage && (
              <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'darkgreen', padding: 10 , borderRadius: '5px'}}>
                  Email address copied to clipboard!
              </div>
            )}
          <Link to="https://github.com/ashagaire"><GitHubIcon className="svg_icons" target="_blank" /></Link>
          
          <Link to="https://www.linkedin.com/in/asha-gaire-2b532217b" target="_blank" ><LinkedInIcon /></Link>
          </span>
          </p>
        </div>
        </div>
        
      </div>
      <div className='home-info'>
      <div className='skills'>
          <h2> Skills</h2>
          <ol className='list'>
            <li className='item'>
              <h3> ReactJS</h3>
            </li>
            <li className='item'>
              <h3> Python</h3>
            </li>
            <li className='item'>
              <h3> Machine Learning</h3>
            </li>
            <li className='item'>
              <h3>Exploratory Data Analysis </h3>
            </li>
            <li className='item'>
              <h3>Microsoft Office Suite </h3>
            </li>
            <li className='item'>
              <h3> Technical Documentation</h3>
            </li>
          </ol>
      </div>

        <div className='home-info-more'>
        <h2> Languages</h2>
          <ol className='list'>
            <li className='item'>
              <h3> Nepali</h3>
            </li>
            <li className='item'>
              <h3> English</h3>
            </li>
            <li className='item'>
              <h3> Finnish</h3>
            </li>
            
          </ol>
          <h2> Languages</h2>

        </div>

      </div>

      
    </div>
  )
}

export default Home