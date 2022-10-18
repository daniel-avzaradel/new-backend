const router = require('express').Router();

const Users = require('../models/users.model');

router.get('/', (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const username = req.body.username;

  const newUser = new Users({ username });

  newUser
    .save()
    .then(() => res.json(`Username ${username} saved`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = Users.findById(id);

  updatedUser
    .updateOne()
    .then(() => res.json(`Username of id: ${id} was updated`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = Users.findById(id);

  deleteUser
    .deleteOne()
    .then(() => res.json(`Username of id: ${id} was removed`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
