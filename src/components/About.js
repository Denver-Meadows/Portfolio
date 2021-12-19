import React from "react";
import photo1 from "../imgs/comphoto.jpg";

const About = () => {
  return (
    <section className="about">
      <h1 className="about-header">About</h1>
      <div className="projects-photo">
        <img
          className="projects-photo-1"
          src={photo1}
          alt="pixel of progammers working"
        />
      </div>
    </section>
  );
};

export default About;
