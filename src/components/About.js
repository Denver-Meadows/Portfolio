import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-header">Experience</h1>
      <div className="about-container">
        <div className="about-container-content">
          <p className="about-container-content-description">
            I'm a software engineer that specializes in front-end web
            development. Currently based in the Cincinnati, OH area.
          </p>
          <div className="about-container-content-tech">
            <h2>Technologies</h2>
            <ul>
              <li>Javascript</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
