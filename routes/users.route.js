const router = require('express').Router();

const User = require('../models/users.model');

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.status(201).json(`User ${username} saved.`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = User.findById(id);

  console.log(updateUser);

  updateUser
    .updateOne()
    .then(() => res.status(200).json(`User ${id} updated`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = User.findById(id);

  console.log(deleteUser);

  deleteUser
    .deleteOne()
    .then(() => res.status(200).json(`User ${id} removed`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
