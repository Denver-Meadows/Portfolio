import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-header">Experience</h1>
      <div className="about-container">
        <div className="about-container-content">
          <div className="about-container-content-description">
            <p>
              Hello! My name is Denver and I love creating things that live on
              the internet. My interest in web development started back in 2018
              when I was first introduced to Python. At that time I was using it
              to scrape the web, build games and other fun small projects.{" "}
            </p>
            <p>
              From there I made my way to the world of web development and found
              a passion for building fun interactive web apps. Since then I have
              been immersed in Javascript, React and all things front-end!
            </p>
            <p>
              {" "}
              I'm currently available for exciting new opportunities and would
              love to connect.
            </p>
          </div>
          <div className="about-container-content-tech">
            <h3>Technologies I Enjoy Building With</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Express</li>
              <li>Node.JS</li>
              <li>SCSS / SASS</li>
              <li>Mongoose</li>
              <li>Git / GitHub</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
