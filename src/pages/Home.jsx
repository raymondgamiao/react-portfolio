import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import { FaFileDownload } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import Socials from "./components/Socials";

import "./Home.css";
import particlesOptions from "../particles.json";

const Home = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <div className="container">
        <h1>Hi! I'm MONDI</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Fullstack Web Developer", "ampogi ko"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="CTA">
          <button className="btn btn-primary">
            Resume
            <FaFileDownload className="ms-2" />
          </button>
          <button className="btn btn-secondary">
            Let's Talk
            <BsFillChatDotsFill className="ms-2" />
          </button>
        </div>
        <Socials />
      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
};

export default Home;
