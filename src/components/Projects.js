import React, { useState } from "react";
import SingleProject from "./SingleProject";
import { projectData } from "../data/project-data";
import "../styles/projects.scss";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisibleProject(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <section
      className="projects"
      // style={
      //   ({ display: visibleProject ? "inline" : "none" },
      //   { animation: visibleProject ? "projectsFadeUp 2s" : "" })
      // }
    >
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
