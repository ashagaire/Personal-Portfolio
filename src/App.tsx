import React from "react";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { ContactCTA } from "./components/ContactCTA";
import About from "./components/About";
import Projects from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Articles } from "./components/Articles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div>
          <section id="hero" className="w-full ">
            <Hero />
          </section>

          {/* <section id="about">
            <About />
          </section> */}

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

          <section id="hobbies">
            <Hobbies />
          </section>

          <section id="articles">
            <Articles />
          </section>

          <ContactCTA />
        </div>
        <Footer />
        <ScrollToTopButton />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
