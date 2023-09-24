import React from "react";
import "./Web.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Web = () => {
  return (
    <div id="web" className="container">
      <div className="section-title">
        <h2>Web Dev Projects</h2>
      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/6.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>React Weather App</h3>
          <p>Quick project using that shows weather details based on location
            searched</p>
          <ul className="stacks">
            <li><AiFillHtml5 /> HTML</li>
            <li><RiReactjsFill /> ReactJS</li>
            <li>Tailwind</li>
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/react-weather-app"
              target={"_blank"}
            >
              Github
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://react-weather-app-z9t3.vercel.app/"
              target={"_blank"}
            >
              View
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/5.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>PhotoCity</h3>
          <p>Booking with Inventory and Employee management systems for a Photo
            Video Company wit multiple branches</p>
          <ul className="stacks">
            <li><FaLaravel /> Laravel</li>
            <li><AiFillHtml5 /> HTML</li>
            <li><SiJquery /> Jquery</li>
            <li><SiMysql /> MySQL</li>
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/capstone"
              target={"_blank"}
            >
              Github
              <AiFillGithub className="ms-2" />
            </a>
          </div>
        </div>

      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/4.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>Legend.GG</h3>
          <p>This is a companion web app for League of Legend players. Note:
              You have to clone my repo and insert your own Riot API key to make
              all features work</p>
          <ul className="stacks">
            <li><AiFillHtml5 /> HTML</li>
            <li><DiCss3 /> CSS</li>
            <li><BsFillBootstrapFill /> Bootstrap</li>
            <li><DiJavascript /> Javascript</li>
            <li>RIOT API</li>
            
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/m2"
              target={"_blank"}
            >
              Github
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/m2/"
              target={"_blank"}
            >
              View
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/3.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>Mondemy</h3>
          <p>This is my First Mini Project for KODEGO Bootcamp. It is a
              resource website for aspiring web developers</p>
          <ul className="stacks">
            <li><AiFillHtml5 /> HTML</li>
            <li><DiCss3 /> CSS</li>
            <li><BsFillBootstrapFill /> Bootstrap</li>
            <li><DiJavascript /> Javascript</li>
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/mondemy"
              target={"_blank"}
            >
              Github
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/mondemy/"
              target={"_blank"}
            >
              View
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/2.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>Pre-Bootcamp Portfolio</h3>
          <p>This is my previous portfolio before learning web development. It
              showcases my skills as a graphic designer</p>
          <ul className="stacks">
            <li><AiFillHtml5 /> HTML</li>
            <li><DiCss3 /> CSS</li>
            <li><BsFillBootstrapFill /> Bootstrap</li>
            <li><DiJavascript /> Javascript</li>
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-primary"
              href="https://github.com/raymondgamiao/Mondi-Graphics"
              target={"_blank"}
            >
              Github
              <AiFillGithub className="ms-2" />
            </a>
            <a
              className="btn btn-secondary"
              href="https://raymondgamiao.github.io/Mondi-Graphics/"
              target={"_blank"}
            >
              View
              <FiExternalLink className="ms-2" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Web;
