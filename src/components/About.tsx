import React from "react";
import profileImage from "../assets/img1.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  return (
    <section className="section">
      <div className="section-title">
        <Typography variant="h2" >
        About Me
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4  sm:px-6">
        <div id='text-section'>
          <div className="">
            <div id='about-info' className=" py-4">
              <Typography variant="body1" className="text-gray-700 py-4">
                I am a Professional UI/UX Designer and Web Developer. Consectetur an adipisi elita, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
              </Typography>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div id='about-description'>
              <Typography variant="body2" className="text-gray-800 py-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </Typography>
            </div>
            
          </div>
          <hr className="border-t border-gray-300 my-4 block lg:hidden" />
        </div>

        <div className="px-4 sm:px-4 py-4">
          <div className="relative w-fit h-[500px] rounded-lg overflow-hidden shadow-lg flex items-center justify-center mx-auto">
            <img 
              src={profileImage} 
              alt="Profile"
              className="h-[500px] w-auto object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900 flex items-center justify-center py-4">
              <div className="grid grid-cols-3 gap-10 m-0">
                <div className="flex items-center justify-center">
                  <a href="https://asha-gaire.medium.com/" className="icons-list">
                  <FontAwesomeIcon icon={faMedium} className="medium-icon" />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href="https://github.com/ashagaire" className="icons-list">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/asha-gaire-2b532217b" className="icons-list">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
