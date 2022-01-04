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

      <About />
      <Projects />
    </main>
  );
};

export default Home;
