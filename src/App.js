import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";
import BlogDisplay from "./pages/BlogDisplay";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDisplay />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      <Footer />  
      </Router>
    </div>
  );
}

export default App;
