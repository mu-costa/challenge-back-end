// src/app.js
const cors = require('cors');
const express = require('express');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', usersRouter);

module.exports = app;
