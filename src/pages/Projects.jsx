import React from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <h1>Projects</h1>
      <div className="projectsWrap">
        <div className="ProjectCard" id="project6">
          <div className="ProjectDetails">
            <div className="ProjectImg"></div>
            <h2 className="ProjectTitle">React Weather App</h2>
            <span className="ProjectType">React API app</span>
            <p className="ProjectDesc">
              Quick project using that shows weather details based on location
              searched
            </p>
            <ul className="ProjectStacks">
              <li>ReactJS</li>
              <li>Tailwind</li>
              <li>API</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="Footer">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/react-weather-app"
              target={"_blank"}
            >
              Repo
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://react-weather-app-z9t3.vercel.app/"
              target={"_blank"}
            >
              Live Demo
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

        <div className="ProjectCard" id="project5">
          <div className="ProjectDetails">
            <div className="ProjectImg"></div>
            <h2 className="ProjectTitle">PhotoCity</h2>
            <span className="ProjectType">FullStack Booking System</span>
            <p className="ProjectDesc">
              Booking with Inventory and Employee management systems for a Photo
              Video Company wit multiple branches
            </p>
            <ul className="ProjectStacks">
              <li>Laravel</li>
              <li>HTML</li>
              <li>Jquery</li>
              <li>Javascript</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="Footer">
            {" "}
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/capstone"
              target={"_blank"}
            >
              Repo
              <AiFillGithub className="ms-2" />
            </a>
          </div>
        </div>

        <div className="ProjectCard" id="project4">
          <div className="ProjectDetails">
            <div className="ProjectImg"></div>
            <h2 className="ProjectTitle">Legend.GG</h2>
            <span className="ProjectType">API Consuming Webpage</span>
            <p className="ProjectDesc">
              This is a companion web app for League of Legend players. Note:
              You have to clone my repo and insert your own Riot API key to make
              all features work
            </p>
            <ul className="ProjectStacks">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>RIOT API</li>
            </ul>
          </div>
          <div className="Footer">
            {" "}
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/m2"
              target={"_blank"}
            >
              Repo
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/m2/"
              target={"_blank"}
            >
              Live Demo
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

        <div className="ProjectCard" id="project3">
          <div className="ProjectDetails">
            <div className="ProjectImg"></div>
            <h2 className="ProjectTitle">Mondemy</h2>
            <span className="ProjectType">Static Webpage</span>
            <p className="ProjectDesc">
              This is my First Mini Project for KODEGO Bootcamp. It is a
              resource website for aspiring web developers
            </p>
            <ul className="ProjectStacks">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="Footer">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/mondemy"
              target={"_blank"}
            >
              Repo
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/mondemy/"
              target={"_blank"}
            >
              Live Demo
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

        <div className="ProjectCard" id="project2">
          <div className="ProjectDetails">
            <div className="ProjectImg"></div>
            <h2 className="ProjectTitle">Pre-Bootcamp Portfolio</h2>
            <span className="ProjectType">Static Webpage</span>
            <p className="ProjectDesc">
              This is my previous portfolio before learning web development. It
              showcases my skills as a graphic designer
            </p>
            <ul className="ProjectStacks">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="Footer">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/Mondi-Graphics"
              target={"_blank"}
            >
              Repo
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/Mondi-Graphics/"
              target={"_blank"}
            >
              Live Demo
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
