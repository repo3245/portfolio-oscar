import React from "react";
import "./qualification.css";

const Qualification = () => {


  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className=
            "qualification__button qualification__active button--flex"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className=
            "qualification__button qualification__active button--flex"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className=
            "qualification__content qualification__content-active"
          >
            <div className="qualification__data">


              <div>
                <h3 className="qualification__title">Inventory Management System</h3>
                <span className="qualification__subtitle">
                  Bird Street Bistro
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">IBM Full-Stack Javascript Developer</h3>
                <span className="qualification__subtitle">
                  IBM Skills Network
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2025
                </div>
              </div>


            </div>

            <div className="qualification__data">


              <div>
                <h3 className="qualification__title">Mobile Application</h3>
                <span className="qualification__subtitle">
                  Conscious Hypnosis Mobile Application
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div className="qualification__calender">
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Qualification;
