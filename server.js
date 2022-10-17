const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
