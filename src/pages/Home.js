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
          <p>A software developer with passion for Machine learning and AI.<br></br><br></br>
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
      <div className='details'>
      <div className='skills-intro'>
      <div className='skills'>
          <h2> Skills</h2>
          <ol className='list'>
            <li >
              <h4> ReactJS</h4>
            </li>
            <li >
              <h4> Python</h4>
            </li>
            <li >
              <h4>Exploratory Data Analysis </h4>
            </li>
            <li >
              <h4>Deploying Machine Learning Models</h4>
            </li>
            <li >
              <h4> Technical Documentation</h4>
            </li>
            <li >
              <h4>Microsoft Office Suite </h4>
            </li>
          </ol>
      </div>

      <div className='introduction'>
        <div>
        <h3 >Profile Summary</h3>
        <p className='intro-paragraph'> With a Bachelor's degree in Computer Science and Information Technology, 
        adept at developing web applications using React JS and Python programming. Skilled in crafting and 
        launching diverse web applications through ReactJS, GitHub Pages, and Firebase. Currently engaging in an
         internship at SAMK Pori, aiming to acquire valuable experience . Proficient in English 
         communication, with an ongoing commitment to enhancing Finnish language proficiency.
        </p>

        </div>
        
        <div className='languages'>
        <h3>languages</h3>
        <div className='languages-list'>
          <div className='language-name'>
            <ol className='list'>
              <li><h2>English    </h2></li>
              <li><h2>Suomi   </h2></li>
              <li><h2>Nepali    </h2></li>
              <li><h2>Hindi     </h2></li>
            </ol>
          </div>
          <div className='language-rating'>
            <ol className='list'>
                <li><h2> ★★★★★ </h2></li>
                <li><h2> ★★☆☆☆ </h2></li>
                <li><h2> ★★★★★ </h2></li>
                <li><h2> ★★★★★ </h2></li>
            </ol>

          </div>
        </div>
        


        </div>
      </div>
      

      </div>
      </div>

      
    </div>
  )
}

export default Home