const Users = require('../models/users.model');
const asyncHandler = require('express-async-handler');

const getUsers = asyncHandler((req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

const getUser = asyncHandler((req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

const addUser = asyncHandler((req, res) => {
  const username = req.body.username;

  const newUser = new Users({ username });

  newUser
    .save()
    .then(() => res.json(`Username ${username} saved`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

const updateUser = asyncHandler((req, res) => {
  const { id } = req.params;
  const updatedUser = Users.findById(id);

  updatedUser
    .updateOne()
    .then(() => res.json(`Username of id: ${id} was updated`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

const deleteUser = asyncHandler((req, res) => {
  const { id } = req.params;
  const deleteUser = Users.findById(id);

  deleteUser
    .deleteOne()
    .then(() => res.json(`Username of id: ${id} was removed`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};