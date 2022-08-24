import React, { createContext, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

export const ThemeContext = createContext();

const Layout = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="pageWrapper" id={theme}>
          <Particles options={particlesOptions} init={particlesInit} />
          <Navigation />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
