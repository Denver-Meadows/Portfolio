import React from "react";
import SingleProject from "./SingleProject";
import { projectData } from "../data/project-data";
import "../styles/projects.scss";
import Rotate from "react-reveal/Rotate";

const Projects = () => {
  return (
    <section className="projects">
      <Rotate top left>
        <div className="projects-div">
          <h1 className="projects-header">
            <span className="number">02.</span> Recent Work
          </h1>
          <div className="section-underline"></div>
        </div>
      </Rotate>

      <React.Fragment>
        {projectData.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </React.Fragment>
    </section>
  );
};

export default Projects;
