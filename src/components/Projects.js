import React from "react";
import SingleProject from "./SingleProject";
import { projectData } from "../data/project-data";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-header">Projects</h1>
      <React.Fragment>
        {projectData.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </React.Fragment>
    </section>
  );
};

export default Projects;
