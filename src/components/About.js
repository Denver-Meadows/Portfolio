import React, { useState } from "react";
import "../styles/about.scss";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

const About = () => {
  const [visibleAbout, setVisibleAbout] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisibleAbout(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <section
      className="about"
      // style={
      //   ({ display: visibleAbout ? "inline" : "none" },
      //   { animation: visibleAbout ? "AboutFadeUp 2s" : "" })
      // }
    >
      <Rotate top right>
        <div className="about-div">
          <h1 className="about-header">
            <span className="number">01.</span> About Me
          </h1>
          <div className="section-underline"></div>
        </div>
      </Rotate>
      <Fade>
        <div className="about-container">
          <div className="about-container-content">
            <div className="about-container-content-description">
              <p>
                Hello! My name is Denver and I love creating things that live on
                the internet. My interest in web development started back in
                2018 when I was first introduced to Python. At that time I was
                using it to scrape the web, build games and other fun small
                projects.{" "}
              </p>
              <p>
                From there I made my way to the world of web development and
                found a passion for building fun interactive web applications.
                Since then I have been immersed in Javascript, React and all
                things front-end!
              </p>
              <p>
                {" "}
                I'm currently seeking new opportunities and would love the
                opportunity to discuss any upcoming or current project needs.
              </p>
            </div>
            <div className="about-container-content-tech">
              <h3>Technologies I Enjoy Building With</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS</li>
                <li>React</li>
                <li>Express</li>
                <li>Node.JS</li>
                <li>SCSS / SASS</li>
                <li>MongoDB</li>
                <li>Git / GitHub</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
