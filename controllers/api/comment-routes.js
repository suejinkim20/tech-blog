const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      postId: req.body.postId,
      body: req.body.body,
      userId: req.session.userId,
    });

    console.log('newComment: ', newComment)

    res.json(newComment);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
