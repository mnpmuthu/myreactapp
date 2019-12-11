//import { User } from "../Components/User";
import userlist from "../Datas/userlist.json";
class UserService {
  users = [];

  constructor() {
    this.users = userlist.users;
  }

  getAllUsers() {
    return this.users;
    //return Promise.resolve(this.users);
  }

  async onAddUser(userObj) {
    this.users.push(userObj);
    console.log(this.users);
    return this.users;
  }

  async onDeleteUser(userId) {
    let index = this.users.findIndex(obj => obj.id === userId);
    this.users.splice(index, 1);
    return this.users;
  }
}
export default UserService;
