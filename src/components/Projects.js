import React from "react";
import SingleProject from "./SingleProject";

const Projects = () => {
  // create a project component
  // create the data for each project
  // loop through that data to display it
  return (
    <section className="projects">
      <h1 className="projects-header">Projects</h1>
      <React.Fragment>
        <SingleProject />
      </React.Fragment>
    </section>
  );
};

export default Projects;
