import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Layout";
import { useContext, useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Link className="brand-name" to="/">
        MONDI
      </Link>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox={isNavExpanded ? "0 0 23 23" : "0 0 20 20"}
          fill="white"
          stroke="white"
          strokeWidth={isNavExpanded ? "1.5" : "0"}
        >
          <path
            fillRule="evenodd"
            d={
              isNavExpanded
                ? "M4.5 19.5l15-15m-15 0l15 15"
                : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            }
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <button
        //className={isDarkMode ? "toggleDarkMode yes" : "toggleDarkMode no"}
        className="toggleDarkMode"
        onClick={toggleTheme}
        /*className={theme}  onClick={toggleTheme} */
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="white"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              theme == "light"
                ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }
            //d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navigation;
