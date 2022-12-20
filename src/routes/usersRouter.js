const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/', usersController.coffee);
usersRouter.get('/users', usersController.getUsers);

module.exports = usersRouter;