const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB connection was successfully established`.blue);
});

const usersRoute = require('./routes/users.route');
app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.cyan.underline);
});
