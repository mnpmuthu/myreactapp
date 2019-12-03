import React,{Component} from 'react';
import { Link } from "react-router-dom";
class Menu extends Component{
  render(){
    return(
      <div className="d-flex justify-content-left textalign-left">
        
        <ul>  
          <li>  
            <Link to="/">Home</Link>  
          </li>  
          <li>  
            <Link to="/about">About</Link>  
          </li>  
          <li>  
            <Link to="/contact">Contact</Link>  
          </li>  
          <li>  
            <Link to="/register">Register</Link>  
          </li>  
        </ul>        
      </div>
    )
  }
}
export default Menu