const { validationResult } = require('express-validator');
const userModel = require('../models/user');

function getAllUsers(req, res) {
  const users = userModel.getAllUsers();
  res.json(users);
}

function addUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = req.body;
  const newUser = userModel.addUser(user);
  res.status(201).json(newUser);
}

function deleteUser(req, res) {
  const userId = req.params.id;
  const user = userModel.deleteUser(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUserData = req.body;
  const user = userModel.updateUser(userId, updatedUserData);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

function getUserById(req, res) {
  const userId = req.params.id;
  const user = userModel.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  getUserById
};
