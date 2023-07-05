const express = require('express');

const router = express.Router();

const { controllerBlogPost } = require('../controllers');

const { validateToken } = require('../middlewares/tokenValidation.middleware');
const { validatePost } = require('../middlewares/userValidation.middleware');

router.get('/', validateToken, controllerBlogPost.getAllPost);
router.get('/:id', validateToken, controllerBlogPost.getPostById);
router.post('/', validateToken, validatePost, controllerBlogPost.createPost);
router.delete('/:id', validateToken, controllerBlogPost.deletePostById);

module.exports = router;