import React from "react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";

import { IoLogoJavascript, IoStarSharp } from "react-icons/io5";
import { RiAngularjsFill } from "react-icons/ri";
import {
  SiRedux,
  SiMui,
  SiPostgresql,
  SiJest,
  SiWebpack,
} from "react-icons/si";

function SkillSet() {
  return (
    <div class="skillset-container">
      <h2>Skills</h2>
      <div class="skillset">
        <FaHtml5 class="skill-icon" />
        <FaCss3 class="skill-icon" />
        <IoLogoJavascript class="skill-icon" />
        <FaReact class="skill-icon" />
        <FaGithub class="skill-icon" />
        <RiAngularjsFill class="skill-icon" />
        <SiRedux class="skill-icon" />
        <SiMui class="skill-icon" />
        <SiWebpack class="skill-icon" />
        <SiJest class="skill-icon" />
        <FaNodeJs class="skill-icon" />
        <SiPostgresql class="skill-icon" />
      </div>
    </div>
  );
}

export default SkillSet;
