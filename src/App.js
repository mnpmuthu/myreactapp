import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import FormsPage from "./Components/FormsPage";
import SelectPage from "./Components/SelectPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Menu} />
        <Route path="/home" component={Home} />
        <Route path="/signup/:message" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/404" component={NotFound} />
        <Route path="/formsPage" component={FormsPage} />
        <Route path="/selectPage" component={SelectPage} />
        <Redirect to="/home" />
      </div>
    );
  }
}
export default App;
