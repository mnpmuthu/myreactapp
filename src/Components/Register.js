import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
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

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      confirmEmail: "",
      password: ""
    });
  };

  registerUser(event) {
    if (this.state.email !== this.state.confirmEmail)
      alert("Email is not been same");
    else {
      alert("User is registerd.");
      this.resetForm();
    }  
    this.props.history.push('/home');
//    event.preventDefault();
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
            value={this.state.name}
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
            value={this.state.email}
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
            value={this.state.confirmEmail}
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
            value={this.state.password}
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
export default withRouter(Register);
