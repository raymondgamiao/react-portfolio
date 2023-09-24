import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { AiFillFacebook } from "react-icons/ai";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="footer">
      <div className="copyright">
       ©  Made by Raymond Gamiao
      </div>
      <div className="social-links">
        <div className="social-btn flex-center">
          <AiFillLinkedin />
          <a
            href="https://www.linkedin.com/in/raymond-gamiao-2b1213115/"
            target={"_blank"}
          >
            Linkedin
          </a>
        </div>

        <div className="social-btn flex-center">
          <AiFillGithub />
          <a href="https://github.com/raymondgamiao" target={"_blank"}>
            Github
          </a>
        </div>

        <div className="social-btn flex-center">
          <SiUpwork />
          <a
            href="https://www.upwork.com/freelancers/~012aeb562ada34c0f9"
            target={"_blank"}
          >
            Upwork
          </a>
        </div>

        <div className="social-btn flex-center">
          <AiFillFacebook />
          <a href="https://www.facebook.com/royalrfgum" target={"_blank"}>
            Facebook
          </a>
        </div>
      </div>

    </div>
  );
};

export default Socials;
