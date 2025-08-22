const express = require('express');
const router = express.Router();

const blogPostsRouter = require('./blogPosts'); // rota de blog
const casesRouter = require('./cases'); // se houver

router.use('/blog-posts', blogPostsRouter);
router.use('/cases', casesRouter); // opcional

module.exports = router;
