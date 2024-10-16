import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";

function NavBar() {
  const [navbarBlur, setNavBarBlur] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 30) setNavBarBlur(true);
    else setNavBarBlur(false);
  };

  window.addEventListener("scroll", scrollHandler);
  const hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };
  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  return (
    <nav className={navbarBlur ? "navbar blur" : "navbar"}>
      <div className="hamburger" onClick={showMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="NavbarLinks">
        <Link to="/" onClick={hideMenu}>
          <AiOutlineHome /> Home
        </Link>
        <Link to="/about" onClick={hideMenu}>
          <BsPerson />
          About
        </Link>
        <Link to="/Projects" onClick={hideMenu}>
          {" "}
          <FaRegBuilding />
          Projects
        </Link>
        <Link to="/contact" onClick={hideMenu}>
          <CgPhone /> Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
