const router = require('express').Router();
const { Post } = require('../models/');
const { findAll } = require('../models/User');
const withAuth = require('../utils/auth'); //took out withAuth middleware, but need to put it back in

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({ where: { userId: req.session.userId} })
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
