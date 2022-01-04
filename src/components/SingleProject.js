import React from "react";
import "../styles/single-project.scss";

const SingleProject = ({ project }) => {
  return (
    <div className="single-project">
      <div className="single-project-container">
        <img
          className="single-project-container-image"
          src={project.photo}
          alt="screenshot of application"
        />
        <div className="single-project-container-details">
          <h2>{project.name}</h2>
          <p>{project.details}</p>
          <p className="single-project-container-details-link">
            Visit the site
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
