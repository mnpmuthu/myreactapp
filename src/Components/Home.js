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
          label: "Name",
          field: "name",
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
        },
        {
          label: "Subject",
          field: "subject",
          sort: "asc",
          width: 100
        },
        {
          label: "Message",
          field: "message",
          sort: "asc",
          width: 100
        }
      ],
      rows: [...this.userlist]
    }
  };

  constructor(props) {
    super(props);
    this.userService = new UserService();
  }

  componentWillMount() {
    this.userlist = this.userService.getAllUsers();
    this.grid.data.rows = this.userlist;
  }
  componentDidMount() {
    console.log(this.grid.data);
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

        <MDBDataTable striped bordered hover data={this.grid.data} />
      </div>
    );
  }
}

export default Home;
