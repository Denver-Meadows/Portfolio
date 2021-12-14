import React from "react";
import Header from "../components/Header";
import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main>
      <div className="home-header-content">
        <Header />
        {/* <BGvideo /> */}
        <IntroInfo />
      </div>
      <div className="home-projects">
        <Projects />
      </div>
    </main>
  );
};

export default Home;
