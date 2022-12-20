const { Octokit } = require('@octokit/core');

const token = process.env.TOKEN;

const octokit = new Octokit({ auth: token });

const usersService = {
    getUsers: async () => {
        const data = await octokit.request('GET /octocat', {});
        return data;
    },
};

module.exports = usersService;