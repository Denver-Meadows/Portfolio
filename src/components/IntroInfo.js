import React from "react";

const IntroInfo = () => {
  return (
    <div className="page-introduction-intro">
      <p className="intro-info-1">Hello,</p>
      <p className="intro-info-2">
        I'm a software engineer that specializes in front-end web development.
        I'm currently based in the Cincinnati, OH area.
      </p>
      <div className="down-arrow">
        <p>Learn more about what I do</p>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default IntroInfo;
