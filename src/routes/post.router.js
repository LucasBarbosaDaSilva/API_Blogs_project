const express = require('express');

const router = express.Router();

const { controllerBlogPost } = require('../controllers');

const { validateToken } = require('../middlewares/tokenValidation.middleware');

router.get('/', validateToken, controllerBlogPost.getAllPost);

module.exports = router;