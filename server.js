const express = require('express');
const colors = require('colors');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const uri = process.env.MONGO_URI;

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB connection was successfully established`.blue);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.cyan.underline);
});
