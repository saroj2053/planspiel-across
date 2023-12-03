import React from "react";
import moduleSvg from "../assets/module.svg";
import courseSvg from "../assets/course.svg";
import acrossSvg from "../assets/across_logo.svg";
import "../assets/css/About.css";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about__features">
            <div className="feature feature1">
              <img className="svg moduleSvg" src={moduleSvg} alt="" />
              <p className="feature__count">
                1000+ <span>Modules</span>
              </p>
            </div>
            <div className="feature feature2">
              <img className="svg acrossSvg" src={acrossSvg} alt="" />
              <p className="feature__count">
                Across <span>Universities</span>
              </p>
            </div>
            <div className="feature feature3">
              <img className="svg courseSvg" src={courseSvg} alt="" />
              <p className="feature__count">
                50+ <span>Courses</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
