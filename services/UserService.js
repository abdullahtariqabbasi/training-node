// services/UserService.js
import fs from 'fs';
import path from 'path';
import User from '../models/User.js';

class UserService {
  constructor() {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    this.dataFilePath = path.join(__dirname, '../data/users.json');
    if (!fs.existsSync(this.dataFilePath)) {
      fs.writeFileSync(this.dataFilePath, '[]');
    }
  }

  writeUsers(users) {
    fs.writeFileSync(this.dataFilePath, JSON.stringify(users, null, 2));
  }

  getAllUsers() {
    const data = fs.readFileSync(this.dataFilePath, 'utf8');
    return JSON.parse(data).map(user => new User(user.id, user.name));
  }

  addUser(user) {
    const users = this.getAllUsers();
    const newUser = new User(user.id, user.name);
    users.push(newUser);
    this.writeUsers(users);
    return newUser;
  }

  deleteUser(userId) {
    let users = this.getAllUsers();
    const index = users.findIndex(user => user.id === +userId);
    if (index !== -1) {
      const user = users[index];
      users = users.filter(user => user.id !== +userId);
      this.writeUsers(users);
      return user;
    }
  }

  updateUser(userId, updatedUserData) {
    let users = this.getAllUsers();
    const index = users.findIndex(user => user.id === +userId);
    if (index !== -1) {
      users[index].name = updatedUserData?.name;
      this.writeUsers(users);
      return users[index];
    }
  }

  getUserById(userId) {
    const users = this.getAllUsers();
    return users.find(user => user.id === +userId);
  }
}

export default UserService;
