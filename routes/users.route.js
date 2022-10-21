const router = require('express').Router();

const User = require('../models/users.model');

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.json('Error: ' + err));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = User.findById(id);

  updateUser
    .updateOne()
    .then((user) => res.json(`${user.username} was updated`))
    .catch((err) => res.json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = User.findById(id);

  deleteUser
    .deleteOne()
    .then((user) => res.json(`${user.username} was removed`))
    .catch((err) => res.json('Error: ' + err));
});

module.exports = router;
