import React from "react";
import { ThemeContext } from "../Layout";
import { useContext } from "react";
import "./Sidenav.css";

const SideNav = ({ activeSection, setActiveSection }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <a href="#landing"
            className={`nav-link ${activeSection === "landing" ? "active-link" : ""}`}
            onClick={() => setActiveSection("landing")}>
            <span className={`nav-text ${theme === "light" ? "orange" : "dark"}`}>Home</span>
            <span className="nav-dot"></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`nav-link ${activeSection === "skills" ? "active-link" : ""}`}
            onClick={() => setActiveSection("skills")}>
            <span className={`nav-text ${theme === "light" ? "orange" : "dark"}`}>Skills</span>
            <span className="nav-dot"></span>
          </a>
        </li>
        <li>
          <a
            href="#web"
            className={`nav-link ${activeSection === "web" ? "active-link" : ""}`}
            onClick={() => setActiveSection("web")}>
            <span className={`nav-text ${theme === "light" ? "orange" : "dark"}`}>Web</span>
            <span className="nav-dot"></span>
          </a>
        </li>
        <li>
          <a
            href="#analytics"
            className={`nav-link ${activeSection === "analytics" ? "active-link" : ""}`}
            onClick={() => setActiveSection("analytics")}>
            <span className={`nav-text ${theme === "light" ? "orange" : "dark"}`}>Analytics</span>
            <span className="nav-dot"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "active-link" : ""}`}
            onClick={() => setActiveSection("contact")}>
            <span className={`nav-text ${theme === "light" ? "orange" : "dark"}`}>Contact</span>
            <span className="nav-dot"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
