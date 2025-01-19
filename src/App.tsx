// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Asha from './components/Asha';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css'; 
import Footer from './components/Footer';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="min-h-screen ">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="mt-20"> 
          <section id="asha" className="w-full -mt-20 "> 
            <Asha />
          </section>
          
          <section id="about" >
            <About />
          </section>

          <section id="education" >
            <Education />
          </section>

          <section id="skills" >
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="contact" >
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
