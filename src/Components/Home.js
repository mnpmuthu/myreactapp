import React, { Component } from "react";
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
//import userlist from "../Datas/userlist.json";
import UserService from "../Service/UserService";
import { MDBDataTable } from "mdbreact";

class Home extends Component {
  userlist = [];
  grid = {
    data: {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
          width: 150
        },
        {
          label: "First Name",
          field: "firstName",
          sort: "asc",
          width: 270
        },
        {
          label: "Last Name",
          field: "lastName",
          sort: "asc",
          width: 200
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 100
        },
        {
          label: "Password",
          field: "password",
          sort: "asc",
          width: 150
        }
      ],
      rows: [
        {
          id: 1,
          firstName: "Muthu",
          lastName: "MNP",
          email: "pathrakalimuthu.n@cognizant.com",
          password: "password@1"
        }
      ]
    }
  };

  constructor(props) {
    super(props);
    this.userService = new UserService();
  }

  componentWillMount() {
    this.userlist = this.userService.getAllUsers();
    this.grid.data.rows = this.userlist;
    console.log(this.userlist);
  }
  componentDidMount() {
    console.log("componentDidMount", this.grid.data);
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
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
            <li key={item.id} label={item.firstName} value={item.firstName}>
              {item.firstName}
            </li>
          ))}
        </ul>

        <MDBDataTable striped bordered hover data={this.grid.data} />
      </div>
    );
  }
}

export default Home;
