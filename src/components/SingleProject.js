import React from "react";
import photo from "../imgs/inventory-plus.jpg";

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
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
