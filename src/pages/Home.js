import React from "react";
import Header from "../components/Header";
// import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <IntroInfo />

      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
