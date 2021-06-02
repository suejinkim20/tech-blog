const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', async ({ body, session }, res) => {
  try {
    const newPost = await Post.create({ 
      title: body.title,
      body: body.body, 
      userId: session.userId });
      
    res.json(newPost);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  console.log(req.body)
  try {
    const updatedPost = await Post.update({
      title: req.body.title,
      body: req.body.body,
    }, 
    {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedPost)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPost =  await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json(deletedPost)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
