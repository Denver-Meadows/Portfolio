import React from "react";
import SingleProject from "./SingleProject";
import { projectData } from "../data/project-data";
import photo1 from "../imgs/comphoto.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-photo">
        <img
          className="projects-photo-1"
          src={photo1}
          alt="pixel of progammers working"
        />
      </div>
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
