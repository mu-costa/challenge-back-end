// src/app.js
const express = require('express');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(express.json());
app.use('/', usersRouter);

module.exports = app;