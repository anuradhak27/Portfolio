import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGithub,
  FaStarHalfAlt,
} from "react-icons/fa";

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
  const fiveStarSkills = (icon1, ratings = 3) => {
    return (
      <div class="skill-icon">
        <div class="main-icon">{icon1}</div>
        <span class="skill-rating">{getStarRatings(ratings)}</span>
      </div>
    );
  };

  const getStarRatings = (ratings) => {
    const stars = [];

    for (let i = 0; i < parseInt(ratings); i++) {
      stars.push(<IoStarSharp />);
    }
    if (!Number.isInteger(ratings)) {
      stars.push(<FaStarHalfAlt />);
    }
    return stars;
  };

  return (
    <div class="skillset-container">
      <h2>Skills</h2>
      <div class="skillset">
        {fiveStarSkills(<FaHtml5 />, 4)}
        {fiveStarSkills(<FaCss3 />, 3.5)}
        {fiveStarSkills(<IoLogoJavascript />, 4)}
        {fiveStarSkills(<FaReact />, 4)}
        {fiveStarSkills(<FaGithub />, 3.5)}
        {fiveStarSkills(<RiAngularjsFill />, 2)}
        {fiveStarSkills(<SiRedux />, 4)}
        {fiveStarSkills(<SiMui />, 3)}
        {fiveStarSkills(<SiWebpack />)}
        {fiveStarSkills(<SiJest />, 2.5)}
        {fiveStarSkills(<FaNodeJs />, 2)}
        {fiveStarSkills(<SiPostgresql />, 2.5)}
      </div>
    </div>
  );
}

export default SkillSet;
