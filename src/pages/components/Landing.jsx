import React from "react";

import Typewriter from "typewriter-effect";
import { FaFileDownload } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Landing.css";

import { ThemeContext } from "../Layout";
import { useContext } from "react";


const Landing = ({ activeSection, setActiveSection }) => {
    const { theme } = useContext(ThemeContext);

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
            <h1 className="headline">
              Hi! I'm <span className="orange ">MONDI</span>
            </h1>
            <h2 className="typewriter">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Data Analyst"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="description">
            Crafting innovative web solutions and illuminating data insights
            </p>
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

            <motion.div
                className="down-arrow" 
                onClick={() => setActiveSection("skills")}
                initial={{ y: 0 }}
                whileHover={{ scale: 1.2 }}
                animate={{ y: [0, 10, 0], transition: { yoyo: Infinity, duration: 1.5 } }}
                >
                    <a href="#skills" 
                    className={theme == "light" ? "orange" : "dark"}>
                        <BsFillArrowDownCircleFill  />
                    </a>
            </motion.div>
          </motion.div>

        </>
      );
};

export default Landing;
