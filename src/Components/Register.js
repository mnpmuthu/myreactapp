import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBSelect
} from "mdbreact";

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
    //console.log(event);
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
      this.resetForm();
      this.props.history.push(
        "/signup/User '" + this.state.name + "' is registerd."
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
                    name="name"
                    value={this.state.name}
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

                  <MDBSelect
                    options={this.state.options}
                    selected="Choose your option"
                    label="Example label"
                  />
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
