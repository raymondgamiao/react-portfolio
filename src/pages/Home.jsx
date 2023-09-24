import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Skills from "./components/Skills"; 
import Web from "./components/Web"; 
import Analytics from "./components/Analytics"; 
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";


const Home = () => {
  const [activeSection, setActiveSection] = useState("landing");

  const detectActiveSection = () => {
    const sections = ["landing", "skills", "web", "analytics", "contact"];
    const scrollPosition = document.querySelector(".pageWrapper").scrollTop + window.innerHeight / 2;
    
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(sectionId);
          break; // Exit loop once the active section is found
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      detectActiveSection();
    };

    const pageWrapper = document.querySelector(".pageWrapper");
    pageWrapper.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      
      pageWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <SideNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <Landing activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Skills/>
      <Web/>
      <Analytics/>
      <Contact/>
    </>
  );
};

export default Home;
