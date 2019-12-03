import React,{Component} from 'react';
import { Link } from "react-router-dom";
class Menu extends Component{
  render(){
    return(
      <div className="row navbar navbar-expand-sm bg-light">        
        <ul className='navbar-nav'>  
          <li className='nav-item col-lg-3'>  
            <Link to="/home">Home</Link>  
          </li>  
          <li className='nav-item col-lg-3'>  
            <Link to="/about">About</Link>  
          </li>  
          <li className='nav-item col-lg-3'>  
            <Link to="/contact">Contact</Link>  
          </li>  
          <li className='nav-item col-lg-3'>  
            <Link to="/register">Register</Link>  
          </li>  
        </ul>        
      </div>
    )
  }
}
export default Menu