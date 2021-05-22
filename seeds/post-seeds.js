const { Post } = require('../models')

const postData = [
    {
        title: 'jQuery and Arrow Functions',
        body: 'If you are trying to select an element using jQuery, remember that the this keyword will not work with an arrow function. Instead, write your asynchronous function like this: async function functionName() { now you can use the this keyword in here}.',
        userId: 1,
    },
    {
        title: 'Authentication',
        body: 'Use express-session and sequelize to store a loggedIn variable that sets to true when the user successfully logs in.',
        userId: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;