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
    getDetails: async (req, res) => {
        const { username } = req.params;
        const data = await usersService.getUserDetails(username);
        res.status(200).json(data);
    },
    getUserRepo: async (req, res) => {
        const { username } = req.params;
        const data = await usersService.getUserRepo(username);
        res.status(200).json(data);
    },
};

module.exports = usersController;
