import React from "react";
import photo1 from "../imgs/comphoto.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="projects-photo">
        <img
          className="projects-photo-1"
          src={photo1}
          alt="pixel of progammers working"
        />
      </div>
      <h1 className="about-header">Capabilities</h1>
      <ul>
        <li>Javascript</li>
        <li>SASS</li>
      </ul>
    </section>
  );
};

export default About;
