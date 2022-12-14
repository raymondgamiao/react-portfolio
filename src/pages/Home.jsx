import React, { useCallback } from "react";
import Typewriter from "typewriter-effect";
import { FaFileDownload } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import Socials from "./components/Socials";
import Stacks from "./components/Stacks";
import { Link } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        className="container"
        id="landing"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 500 }}
        transition={{ duration: 0.75 }}
      >
        <h1>
          Hi! I'm <span className="orange ">MONDI</span>
        </h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Fullstack Developer", "Is open to work"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div>
          <p>
            Im Raymond Gamiao, a full-stack developer based in Cagayan,
            Philippines
          </p>
        </div>
        <Stacks />
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
      </motion.div>
    </>
  );
};

export default Home;
