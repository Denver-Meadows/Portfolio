import React from "react";
import Header from "../components/Header";
// import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      <div className="page-introduction">
        {/* <Header /> */}
        {/* <BGvideo /> */}
        <IntroInfo />
      </div>
      <div className="home-about">
        <About />
      </div>
      <div className="home-projects">
        <Projects />
      </div>
    </main>
  );
};

export default Home;
