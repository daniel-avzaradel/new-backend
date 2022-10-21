const router = require('express').Router();

const User = require('../models/users.model');
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
router.route('/').get(getUsers).post(addUser);

module.exports = router;
