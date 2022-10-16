const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = process.env.MONGO_URI;

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users.route');
app.use('/users', usersRouter);

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection was successfully established!'.blue);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.cyan.underline);
});
