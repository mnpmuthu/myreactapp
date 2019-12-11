import React, { Component } from "react";
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
//import userlist from "../Datas/userlist.json";
import UserService from "../Service/UserService";

class Home extends Component {
  userlist = [];
  constructor(props) {
    super(props);
    this.userService = new UserService();
  }

  componentDidMount() {
    this.userlist = this.userService.getAllUsers();
  }

  render() {
    return (
      <div>
        {this.props.match.params.message ? (
          <h1>Sign up - {this.props.match.params.message}</h1>
        ) : (
          <h1>Home </h1>
        )}

        <ul>
          {this.userlist.map(item => (
            <li key={item.id} label={item.name} value={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
