import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import Tilt from "react-parallax-tilt";
import Avatar from "../../Images/Avatar.png";
import Typewriter from "typewriter-effect";

function Home() {
  function TypeWriter() {
    return (
      <Typewriter
        options={{
          strings: ["Front End Developer"],
          className: "type-writter",
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    );
  }
  return (
    <div className="Home">
      <div className="HomePage">
        <h1>Hello there !</h1>
        <h1>
          I'm <span className="name">Anuradha Karaguppi</span>
        </h1>
        <TypeWriter />
        <Link to="about">
          <button>
            About Me
            <BsPerson />
          </button>
        </Link>
        <Link to="/contact">
          <button>
            Contact
            <CgPhone />
          </button>
        </Link>
      </div>
      <Tilt>
        <img className="Avatar" src={Avatar} alt="It's an avatar" />
      </Tilt>
    </div>
  );
}

export default Home;
