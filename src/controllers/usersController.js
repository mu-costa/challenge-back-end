const usersService = require('../services/usersService');

const usersController = {
    coffee: async (req, res) => {
        const data = await usersService.coffee();
        res.status(200).json(data);
    },
    getUsers: async (req, res) => {
        const { since } = req.query;
        const data = await usersService.getUsers(since);
        res.status(200).json(data);
    },
};

module.exports = usersController;
