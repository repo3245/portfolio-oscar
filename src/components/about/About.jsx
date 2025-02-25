import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container grid">

        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Hello! I'm a passionate web developer specializing in JavaScript, Node.js, React, React Native, CSS, and HTML. I love creating dynamic, user-friendly web applications and turning complex problems into elegant solutions. Whether it's building back-end systems, crafting front-end interfaces, or developing mobile apps, I'm committed to delivering high-quality, scalable code. I stay updated with the latest trends and am eager to bring your digital ideas to life. Let's collaborate!
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
