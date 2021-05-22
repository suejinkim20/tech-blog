const { User } = require('../models')

const userData = [
    {
        username: 'coderGenius',
        password: 'password1'
    },
    {
        username: 'debugWhiz',
        password: 'password1'
    },
    {
        username: 'jsGuru',
        password: 'password1'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;