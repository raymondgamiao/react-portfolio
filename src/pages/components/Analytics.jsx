import React from "react";
import "./Analytics.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiR } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiGooglesheets } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Analytics = () => {
  return (
    <div id="analytics" className="container">
      <div className="section-title">
        <h2>Data Analysis Projects</h2>
      </div>

      <div className="project">
        <div className="project-image">
          <img src="../../img/cyclistic.png" alt="asd" />
        </div>
        <div className="project-details">
          <h3>Exploring Cyclistic Bike-Share Data</h3>
          <p>For my Google Data Analytics certification capstone, I conducted a comprehensive analysis using real-world data to extract actionable insights, demonstrating my proficiency in data collection, analysis, and visualization</p>
          <ul className="stacks">
            <li><SiR /> R Programming</li>
            <li>Data Cleaning</li>
            <li>Data Viz</li>
          </ul>
          <div className="project-buttons">
            <a
              className="btn btn-secondary"
              href="https://rpubs.com/raymondgamiao/cyclistic-bike-sharing-analysis-capstone/"
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

export default Analytics;
