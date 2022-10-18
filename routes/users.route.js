const router = require('express').Router();

const Users = require('../models/users.model');
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');

router.route('/').get(getUsers);
router.route('/add').post(addUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
