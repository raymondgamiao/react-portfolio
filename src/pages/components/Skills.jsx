import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
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

const Skills = () => {
  return (
    <div id="skills" className="container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="skills-content">
        <div className="get-to-know">
          <h2>Get to know me</h2>
          <p>
            Hey there! I'm <strong className="orange">Raymond Gamiao</strong>, and I work as a <strong className="orange">web developer</strong> at QuickStrike Manufacturing.
            My primary role involves crafting <strong className="orange">custom dashboards</strong> to enhance data accessibility for businesses. Along my journey, I've also nurtured a strong interest in the realm of <strong className="orange">data analysis</strong>. I'm enthusiastic about uncovering valuable insights within data, empowering informed decision-making, and supporting businesses to thrive in today's data-driven landscape.
          </p>
        </div>
        <div className="skills-list">
          <h3>Web Development</h3>
          <ul className="stacks">
            <li><AiFillHtml5 /> HTML</li>
            <li><DiCss3 /> CSS</li>
            <li><BsFillBootstrapFill /> Bootstrap</li>
            <li><DiJavascript /> Javascript</li>
            <li><SiVuedotjs /> VueJS</li>
            <li><RiReactjsFill /> ReactJS</li>
            <li><SiPhp /> PHP</li>
            <li><FaLaravel /> Laravel</li>
          </ul>

          <h3>Data Analysis</h3>
          <ul className="stacks">
            <li><SiR /> R</li>
            <li><SiTableau /> Tableau</li>
            <li><SiPowerbi /> Power BI</li>
            <li><SiMysql /> SQL</li>
            <li><SiMicrosoftexcel /> Excel</li>
            <li><SiGooglesheets /> Google Sheets</li>
          </ul>

          <h3>Tools</h3>
          <ul className="stacks">
            <li><SiGithub /> GitHub</li>
            <li><SiJira /> JIRA</li>
            <li><SiSlack /> Slack</li>
            <li><SiPostman /> Postman</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
