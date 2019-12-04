import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";
//import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from "./App.js";

import "./styles.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const routing = (
  <div className="container-fluid">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
