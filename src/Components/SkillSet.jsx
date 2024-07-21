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
  const getRatings = (skill, icon1, ratings = 3) => {
    return (
      <div title={skill} class="skill-icon">
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
        {getRatings("HTML", <FaHtml5 />, 4)}
        {getRatings("CSS", <FaCss3 />, 3.5)}
        {getRatings("JavaScript", <IoLogoJavascript />, 4)}
        {getRatings("React", <FaReact />, 4)}
        {getRatings("Github", <FaGithub />, 3.5)}
        {getRatings("AngulaJs", <RiAngularjsFill />, 2)}
        {getRatings("AngularJs", <SiRedux />, 4)}
        {getRatings("Material UI", <SiMui />, 3)}
        {getRatings("WebPack", <SiWebpack />)}
        {getRatings("Jest", <SiJest />, 2.5)}
        {getRatings("Nodejs", <FaNodeJs />, 2)}
        {getRatings("Postgresql", <SiPostgresql />, 2.5)}
      </div>
    </div>
  );
}

export default SkillSet;
