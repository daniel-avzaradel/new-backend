const router = require('express').Router();

const User = require('../models/users.model');

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findById(id).then(() =>
    res.status(200).json(`User of id: ${req.params.id} reveiced`)
  );
});

router.post('/add', (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('Username successfully added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = User.findById(id);

  updatedUser
    .updateOne({
      username: req.body.username,
    })
    .then(() =>
      res
        .status(200)
        .json(`Username ${req.body.username} was successfully updated`)
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteUser = User.findById(id);

  deleteUser
    .deleteOne()
    .then(() =>
      res.status(200).json(`Username of id: ${id} was successfully removed`)
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
