import React from "react";
import Header from "../components/Header";
// import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";
import Projects from "../components/Projects";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      <section className="page-introduction">
        {/* <Header /> */}
        {/* <BGvideo /> */}
        <IntroInfo />
      </section>
      <section className="home-about">
        <About />
      </section>
      <section className="home-projects">
        <Projects />
      </section>
    </main>
  );
};

export default Home;
