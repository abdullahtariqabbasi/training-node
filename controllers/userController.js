// controllers/UserController.js
import UserService from '../services/UserService.js';

class UserController {
  constructor() {
    this.user = new UserService();
  }

  getAllUsers(req, res) {
    const users = this.user.getAllUsers();
    res.json(users);
  }

  addUser(req, res) {
    const data = req.body;
    const newUser = this.user.addUser(data);
    res.status(201).json(newUser);
  }

  deleteUser(req, res) {
    const userId = req.params.id;
    const user = this.user.deleteUser(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }

  updateUser(req, res) {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const user = this.user.updateUser(userId, updatedUserData);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }

  getUserById(req, res) {
    const userId = req.params.id;
    const user = this.user.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }
}

export default UserController;
