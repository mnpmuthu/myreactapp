import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.match.params.message ? (
          <h1>Sign up - {this.props.match.params.message}</h1>
        ) : (
          <h1>Home </h1>
        )}
      </div>
    );
  }
}

export default Home;
