import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import "./Home.css";
import particlesOptions from "../particles.json";

const Home = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <>
      <Particles options={particlesOptions} init={particlesInit} />

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
    </>
  );
};

export default Home;
