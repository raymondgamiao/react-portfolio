import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const Layout = () => {
  return (
    <>
      <div className="pageWrapper">
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
