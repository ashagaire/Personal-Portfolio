// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 p-10 sticky top-0 w-full z-10">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8 text-white text-xl">
          <li>
            <Link to="asha" smooth={true} duration={500} offset={-100} className="cursor-pointer">Asha</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} offset={-100} className="cursor-pointer">Education</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-100} className="cursor-pointer">Skills</Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-100} className="cursor-pointer">Experience</Link>
          </li>
        
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-100} className="cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
