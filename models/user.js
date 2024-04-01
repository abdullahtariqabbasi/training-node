// models/user.js
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/users.json');

if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]');
}

function getAllUsers() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));
}

function addUser(user) {
  const users = getAllUsers();
  users.push(user);
  writeUsers(users);
  return user;
}

function deleteUser(userId) {
  let users = getAllUsers();
  const index = users.findIndex(user => user.id == userId);
  if (index !== -1) {
    const user = users[index];
    users = users.filter(user => user.id !== +userId);
    writeUsers(users);
    return user;
  }
}

function updateUser(userId, updatedUserData) {
  let users = getAllUsers();
  const index = users.findIndex(user => user.id == userId);
  if (index !== -1) {
    users[index].name = updatedUserData?.name;
    writeUsers(users)
    return users[index];
  }
}

function getUserById(userId) {
  const users = getAllUsers();
  return users.find(user => user.id === +userId);
}

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  getUserById
};
