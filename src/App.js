import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Home from "./Components/Home"
class App extends Component {
  render() {
    return (
      <div>        
        <Route path="/" component={Menu} />  
        <Route path="/home" component={Home}/> 
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
        <Route path="/register" component={Register}/>      
      </div>
    );
  }
}
export default App;
