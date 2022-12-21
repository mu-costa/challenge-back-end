const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/', usersController.coffee);
usersRouter.get('/rate', usersController.getRateLimit);
usersRouter.get('/api/users', usersController.getUsers);
usersRouter.get('/api/users/:username/details', usersController.getDetails);
usersRouter.get('/api/users/:username/repos', usersController.getUserRepo);

module.exports = usersRouter;