const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');

const getUsers = asyncHandler((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json('Error: ' + err));
});

const getUser = asyncHandler((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json('Error: ' + err));
});

module.exports = {
  getUsers,
  getUser,
};
