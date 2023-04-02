import React from "react";
import "../css/Footer.css";

import LogoGitHub from "../assets/github.png";
import LogoLinkdIn from "../assets/linkdin.png";
import LogoCorreo from "../assets/correo.png";

function Footer() {
  return (
    <div className="footer">
      <p>Made with ❤️  by Adrian Mirabal 🐧 🐧 </p>
      <div className="logoContainer">
        <a href="https://github.com/WearyMench" target="_blank">
          <img src={LogoGitHub} alt="logo github" className="logo" />
        </a>
        <a href="https://linkedin.com/in/adrianm07" target="_blank">
          <img src={LogoLinkdIn} alt="logo linkdin" className="logo" />
        </a>
        <a href="mailto:adrian.mirabal07@gmail.com" target="_blank">
          <img src={LogoCorreo} alt="logo correo" className="logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
