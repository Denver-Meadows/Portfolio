import React from "react";
import "../styles/single-project.scss";
import Fade from "react-reveal/Fade";

const SingleProject = ({ project }) => {
  return (
    <div>
      <Fade>
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
                <a href={project.url} target="_blank">
                  Visit the site
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SingleProject;
