import React from "react";
import Navbar from "./components/Navbar";
import Asha from "./components/Asha";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div>
          <section id="asha" className="w-full ">
            <Asha />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
        <ScrollToTopButton />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
