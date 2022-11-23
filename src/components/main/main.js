import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Footer from "./pages/footer/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './main.css'


function Main() {
  return (
   <div className="main">
          <Routes>
                <Route path='/' element={   <Home />} />
                <Route path='/about' element={   <About />} />
                <Route path='/skills' element={   <Skills />} />
                <Route path='/projects' element={   <Projects />} />
          </Routes>
   </div>
  );
}

export default Main;
