import React from "react";
import "../assets/css/CourseFinder.css";
import courseFinderImage from "../assets/university_match.png";
import { useNavigate } from 'react-router-dom';


const CourseFinder = () => {
  const navigate = useNavigate();

  return (
    <div className="courseFinder">
      <img className="courseFinder__image" src={courseFinderImage} alt="" />
      <div className="courseFinder__details">
        <h2 className="courseFinder__title">
          Find Your Course That Makes Bright Future
        </h2>
        <p className="courseFinder__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button type="button" className="courseFinder__button" onClick={() =>  navigate('/modules')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CourseFinder;
