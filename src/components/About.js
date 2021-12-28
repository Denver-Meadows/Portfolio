import React from "react";
import photo1 from "../imgs/comphoto.jpg";

const About = () => {
  return (
    <section className="about">
      {/* <div className="projects-photo">
        <img
          className="projects-photo-1"
          src={photo1}
          alt="pixel of progammers working"
        />
      </div> */}
      <h1 className="about-header">Capabilities</h1>
      <div className="about-container">
        <p>
          I'm a software engineer that specializes in front-end web development.
          Currently based in the Cincinnati, OH area.
        </p>
        <ul>
          <li>Javascript</li>
          <li>SASS</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
