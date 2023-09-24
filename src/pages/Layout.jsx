import React, { createContext, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


export const ThemeContext = createContext();

const Layout = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
      console.log(container)
  };
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="pageWrapper" id={theme}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
          />
          <Navigation />
          <Outlet />
          <Socials />

        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
