import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
      password: ""
    };
  }

  registerUser() {
    alert("User {this.state.name} is registerd...");
  }

  changeInputValue(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={() => this.registerUser()}>
        <div>
          <input
            type="test"
            name="name"
            onChange={() => this.changeInputValue(this.event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  }
}
export default Register;
