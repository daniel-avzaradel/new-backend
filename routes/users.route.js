const router = require('express').Router();

const User = require('../models/users.model');

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.status(200).json(`Users list retreived`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
