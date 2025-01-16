// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Asha from './components/Asha';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "./styles/asha.css";
import './styles/navbar.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/contacts.css'


import './styles/education.css'

import About from './components/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Asha />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
