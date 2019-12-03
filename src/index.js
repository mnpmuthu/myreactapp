import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap";

import App from "./App.js";
import "./styles.css";

const routing = (
  <div className="container-fluid">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
