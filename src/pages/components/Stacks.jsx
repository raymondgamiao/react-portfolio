import React from "react";
import "./Stacks.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { TbBrandGit } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";

const Stacks = () => {
  return (
    <ul className="stacks">
      <li>
        <AiFillHtml5 />
        HTML
      </li>
      <li>
        <DiCss3 />
        CSS
      </li>
      <li>
        <BsFillBootstrapFill />
        Bootstrap
      </li>
      <li>
        <DiJavascript />
        Javascript
      </li>
      <li>
        <TbBrandGit />
        git
      </li>
      <li>
        <FaNodeJs />
        NodeJS
      </li>
      <li>
        <RiReactjsFill />
        ReactJS
      </li>
      <li>
        <SiPhp />
        php
      </li>
      <li>
        <FaLaravel />
        Laravel
      </li>
      <li>
        <SiPostman />
        Postman
      </li>
      <li>
        <SiVercel />
        Vercel
      </li>
    </ul>
  );
};

export default Stacks;
