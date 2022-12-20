const { Octokit } = require('@octokit/core');

const token = process.env.TOKEN;

const octokit = new Octokit({ auth: token });

const usersService = {
    coffee: async () => {
        const data = await octokit.request('GET /octocat', {});
        return data;
    },
    getUsers: async (since) => {
        const { data } = await octokit.request('GET /users{?since,per_page}', {
            since,
            per_page: '10',
        });
        return data;
    },
    getUserDetails: async (username) => {
        const { data } = await octokit.request('GET /users/{username}', {
            username,
          });
        return data;
    },
    getUserRepo: async (username) => {
        const { data } = await octokit.request('GET /users/{username}/'
        + 'repos{?type,sort,direction,per_page,page}', {
            username,
          });
        return data;
    },
};

module.exports = usersService;