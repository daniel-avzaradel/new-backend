const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');

const getUsers = asyncHandler((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json('Error: ' + err));
});

const getUser = asyncHandler((req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.json('Error: ' + err));
});

const addUser = asyncHandler((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then((user) =>
      res.status(201).json(`Username ${user.username} was saved!`)
    )
    .catch((err) => res.json('Error: ' + err));
});

const updateUser = asyncHandler((req, res) => {
  const { id } = req.params;
  const username = req.body.username;
  const updateUser = User.findById(id);

  updateUser
    .updateOne({ username })
    .then((user) => res.json(`username ${username} of id: ${id} was updated`))
    .catch((err) => res.json('Error: ' + err));
});

const deleteUser = asyncHandler((req, res) => {
  const { id } = req.params;
  const deleteUser = User.findById(id);

  deleteUser
    .deleteOne()
    .then((user) => res.json(`${user} was removed`))
    .catch((err) => res.json('Error: ' + err));
});

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
