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

    this.registerUser = this.registerUser.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  registerUser(event) {
    if (this.state.email !== this.state.confirmEmail)
      alert("Email is not been same");
    else alert("User is registerd.");

    console.log("User is registerd.");
    event.preventDefault();
  }

  changeValue(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <div className="d-flex justify-content-center">
          <h2>Sign Up</h2>
        </div>

        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-user" />
          </span>
          <input
            className="form-control"
            placeholder="Your name"
            type="text"
            name="name"
            onChange={this.changeValue}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-envelope" />
          </span>
          <input
            className="form-control"
            placeholder="Your email"
            type="email"
            name="email"
            onChange={this.changeValue}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-warning" />
          </span>
          <input
            className="form-control"
            placeholder="Confirm your email"
            type="email"
            name="confirmEmail"
            onChange={this.changeValue}
            required
          />
        </div>

        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-lock" />
          </span>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={this.changeValue}
            required
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary text-uppercase">
            Register
          </button>
        </div>
      </form>
    );
  }
}
export default Register;
