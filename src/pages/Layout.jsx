import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

export const ThemeContext = createContext();

const Layout = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="pageWrapper" id={theme}>
          <Navigation />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
