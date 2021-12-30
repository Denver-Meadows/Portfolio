import React from "react";
import SingleProject from "./SingleProject";
import { projectData } from "../data/project-data";
import "../styles/projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-header">Recent Work</h1>
      <React.Fragment>
        {projectData.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </React.Fragment>
    </section>
  );
};

export default Projects;
