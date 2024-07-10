import SkillSet from "../SkillSet";
import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <h2 class="subtitle highlighting">Get to know Me !</h2>
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
          <b class="highlighting"> web developer </b> , and currently I am also
          involved in back-end tasks such as API creation and writing queries
          for data retrieval and manipulation from databases.
        </p>{" "}
      </p>
      <button>
        {" "}
        Download <FaDownload />{" "}
      </button>
      <SkillSet />
    </div>
  );
}

export default About;
