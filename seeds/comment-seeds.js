const { Comment } = require('../models')

const commentData = [
    {
        postId: 1,
        body: 'I had this same problem on my project! Thanks for the tip!',
        userId: 2,
    },
    {
        postId: 2,
        body: 'Use express-session and sequelize to store a loggedIn variable that sets to true when the user successfully logs in.',
        userId: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;