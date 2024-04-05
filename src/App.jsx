import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
