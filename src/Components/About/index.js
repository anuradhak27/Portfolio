import SkillSet from "../SkillSet";
import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <h2 class="subtitle">
        Get to <span className="highlighting">know</span> Me !
      </h2>
      <p class="about_paragraph">
        Hi, I'm Anuradha Karaguppi, a skilled professional with total{" "}
        <b class="highlighting">5 years </b>
        of experience.{" "}
        <p>
          <p>
            During my career, I have built single page, responsive applications.
            Improved page loading time and mitigated security threats for the
            application.
          </p>
          My career includes roles as a{" "}
          <b class="highlighting"> web developer </b> , and currently also
          involved myself in back-end tasks such as API creation and writing
          queries for data retrieval and manipulation from databases to expand
          my skills to become Full-stack developer.
        </p>{" "}
      </p>
      <a href="/Anuradha_Karagupp_5yrs.pdf" download>
        <button>
          {" "}
          Download <FaDownload />{" "}
        </button>
      </a>
      <SkillSet />
    </div>
  );
}

export default About;
