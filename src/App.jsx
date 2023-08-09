import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import MenuBar from "./components/SideBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div className="sidebar">
        <MenuBar />
      </div>

      <div className="body-text">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
