import React from "react";
import resume from "../../assets/oscar-alcalde-resume.pdf";

const Info = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume; // Replace with the actual path to your resume file
    link.download = 'oscar-alcalde-resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">7 Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Contact Me</h3>
        <span className="about__subtitle">Available Weekdays</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <a download="" href={resume} onClick={handleDownload}>
          <h3 className="about__download">Download Resume</h3>
        </a>
      </div>
    </div>
  );
};

export default Info;
