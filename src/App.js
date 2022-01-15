import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer";
// import BGvideo from "./components/BGvideo";

function App() {
  return (
    <div>
      <Navbar />
      {/* <BGvideo /> */}
      <ScrollButton />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <h1>Wrong Page</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
