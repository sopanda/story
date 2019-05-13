import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import { Router } from "react-router-dom";
import { history } from "./helpers";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
