import React from "react";
import Header from "../components/Header";
import BGvideo from "../components/BGvideo";
import IntroInfo from "../components/IntroInfo";

const Home = () => {
  return (
    <div className="home-header-content">
      <Header />
      {/* <BGvideo /> */}
      <IntroInfo />
    </div>
  );
};

export default Home;
