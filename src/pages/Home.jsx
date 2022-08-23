import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import { FaFileDownload } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import Socials from "./components/Socials";
import { Link } from "react-router-dom";
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
              strings: ["Fullstack Developer", "ampogi ko"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="CTA">
          <a className="btn btn-primary" href="/CV.pdf" download="CV.pdf">
            Resume
            <FaFileDownload className="ms-2" />
          </a>
          <Link className="btn btn-secondary" href="#" to="/contact">
            Let's Talk
            <BsFillChatDotsFill className="ms-2" />
          </Link>
        </div>
        <Socials />
      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
};

export default Home;
