import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import './main.css'


function Main() {
  return (
   <div className="main">
   <Home />
   <About />
   <Skills />
   <Projects />
   </div>
  );
}

export default Main;
