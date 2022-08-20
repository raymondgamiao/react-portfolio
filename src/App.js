import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <ul>
        <li>home</li>
        <li>projects</li>
        <li>contacts</li>
        <li> navbar dito</li>
      </ul>

      <h1>Hi! I'm MONDI</h1>
      <h2>Fullstack Web Developer</h2>
      <p>yung nagalaw na parang typewriter</p>
      <button>RESUME</button>
      <button>Let's Talk</button>

      <ul>
        <li>linkedin</li>
        <li>github</li>
        <li>upwork</li>
        <li>facebook</li>
        <li>social link icons sa gilid</li>
      </ul>
    </div>
  );
}

export default App;
