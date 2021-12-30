import React from "react";
import "../styles/intro.scss";

const IntroInfo = () => {
  return (
    <div className="page-introduction-intro">
      <div className="intro-items">
        <p className="intro-info-1">Hello, my name is</p>
        <p className="intro-info-2">Denver Meadows.</p>
        <p className="intro-info-3">
          I'm a software engineer that specializes in front-end web development.
          Currently based in the Cincinnati, OH area.
        </p>
      </div>
      <div className="down-arrow">
        <p className="learn-more">Learn more about what I do</p>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default IntroInfo;
