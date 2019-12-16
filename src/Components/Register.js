import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import UserService from "../Service/UserService";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      firstName: "",
      lastName: null,
      email: "",
      confirmEmail: "",
      password: ""
    };
    this.userService = new UserService();
    this.registerUser = this.registerUser.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  resetForm = () => {
    this.setState({
      id: null,
      firstName: "",
      lastName: null,
      email: "",
      confirmEmail: "",
      password: ""
    });
  };

  registerUser(event) {
    //console.log(event);
    event.preventDefault();
    event.target.classList.add("was-validated");
    if (event.target.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      event.preventDefault();
    } else if (this.state.email !== this.state.confirmEmail) {
      alert("Email is not been same");
      event.preventDefault();
    } else {
      alert("User is registerd.");
      this.userService.onAddUser(this.state);
      this.resetForm();
      this.props.history.push(
        "/signup/User '" + this.state.firstName + "' is registerd."
      );
    }
  }

  changeValue(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form
          noValidate
          onSubmit={this.registerUser}
          className="needs-validation"
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.changeValue}
                    required
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>

                  <MDBInput
                    name="email"
                    value={this.state.email}
                    onChange={this.changeValue}
                    required
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>

                  <MDBInput
                    name="confirmEmail"
                    value={this.state.confirmEmail}
                    onChange={this.changeValue}
                    required
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>

                  <MDBInput
                    name="password"
                    value={this.state.password}
                    onChange={this.changeValue}
                    required
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="text-center">
                  <MDBBtn type="submit" color="primary">
                    Register
                  </MDBBtn>
                  <MDBBtn type="reset" color="danger" onClick={this.resetForm}>
                    Reset
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    );
  }
}
export default withRouter(Register);
