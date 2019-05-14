import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history, store } from "./helpers";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
