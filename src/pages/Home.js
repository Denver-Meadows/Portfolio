import React from "react";
import Header from "../components/Header";
// import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <main>
      <SideNav />
      <IntroInfo />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
