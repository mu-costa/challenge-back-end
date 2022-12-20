const usersService = require('../services/usersService');

const usersController = {
    getUsers: async (req, res) => {
        const data = await usersService.getUsers();
        res.status(200).json(data);
    },
};

module.exports = usersController;
