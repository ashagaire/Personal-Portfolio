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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4   lg:px-6">
        <div id='text-section'>
          <div className="">
            <div id='about-info' className=" py-4">
              <Typography 
                variant="body1" 
                className="text-gray-700" 
                style={{ lineHeight: '1.6', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
              >
              A young, energetic, self-learner, AI enthusiast, graduate with a bachelor’s degree in 
              Computer Science and Information Technology. Competent in Front-end designing with React TypeScript, Tailwind CSS, and Material UI. 
              A versatile person with ‘can do attitude who takes assigned responsibility with dedication 
              and always endeavors for self-improvement as a professional as well as a human being.
              </Typography>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div id='about-description'>
              <Typography 
                variant="body2" 
                className="text-gray-800 py-4" 
                style={{ lineHeight: '1.6', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
              >
              With experience in Agile team, I have developed strong collaboration and problem-solving skills. My work 
              involves front-end and back-end development using React TypeScript, C# .NET, and PostgreSQL to create robust full-stack applications. 
              I have effectively utilized Git for teamwork and collaboration, ensuring clean, scalable code and seamless integration in multi-developer environments.Team 
              discussions and collaborative workflows are where I thrive, and I value on-site roles that encourage teamwork and open communication.
              <br /><br />
              A strong interest in data science and artificial intelligence drives my continuous learning. Advanced courses in machine learning and 
              deep learning have enhanced my knowledge, while my internship at SAMK provided hands-on experience in data analysis and predictive 
              modeling. Writing blogs and sharing insights has further strengthened my understanding and passion for these fields.
              <br /><br />
              Fluency in English and conversational skills in Finnish support my ability to work in diverse teams, with a keen interest in Finnish-speaking 
              workplaces to improve my language skills and cultural integration. Outside of my professional life, gardening and handcraft activities allow me 
              to express creativity and attention to detail, bringing balance and fulfillment to my daily routine.
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
