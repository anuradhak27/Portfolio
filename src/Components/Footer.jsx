import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <p>Copyright &copy; {year} | All Rights Reserved</p>
      <div className="footerLink">
        <a
          href="https://github.com/anuradhak27/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailTo:radhavk25@gmail.com" target="_blank" rel="noreferrer">
          <IoMdMail />
        </a>
        <a
          href="https://www.linkedin.com/in/anuradhabk/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
