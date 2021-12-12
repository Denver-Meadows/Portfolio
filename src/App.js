import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import BGvideo from "./components/BGvideo";

function App() {
  return (
    <div>
      <Navbar />
      <BGvideo />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <h1>Wrong Page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
