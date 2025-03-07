import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Oscar Alcalde</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>


        </ul>

        <div className="footer__social">

          <a
            href="https://www.facebook.com/profile.php?id=100081053566110"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/repo3245"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/oscar-alcalde-7ba48b352/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

        </div>

        <span className="footer__copy">
          &copy; {currentYear} Oscar Alcalde. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
