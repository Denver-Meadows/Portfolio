import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.Fragment>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.Fragment>,
  document.getElementById("root")
);
