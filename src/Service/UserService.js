//import { User } from "../Components/User";
import userlist from "../Datas/userlist.json";
class UserService {
  users = [];

  constructor() {
    this.users = userlist.users;
  }

  getAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        //this.setState({ contacts: data });
        console.log(data);
      })
      .catch(console.log);
    return this.users;
    //return Promise.resolve(this.users);
  }

  async onAddUser(userObj) {
    /*fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(userObj)
    })
      .then(response => {
       if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });*/
    this.users.push(userObj);
    console.log(this.users);
    return this.users;
  }

  async onDeleteUser(userId) {
    /*fetch("https://jsonplaceholder.typicode.com/users", {
        method: "DELETE",
        mode: "cors"
      })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });*/

    let index = this.users.findIndex(obj => obj.id === userId);
    this.users.splice(index, 1);
    return this.users;
  }
}
export default UserService;
