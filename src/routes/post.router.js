const express = require('express');

const router = express.Router();

const { controllerBlogPost } = require('../controllers');

const { validateToken } = require('../middlewares/tokenValidation.middleware');
const { validatePost, validationUpdate } = require('../middlewares/userValidation.middleware');

router.get('/', validateToken, controllerBlogPost.getAllPost);
router.get('/:id', validateToken, controllerBlogPost.getPostById);
router.post('/', validateToken, validatePost, controllerBlogPost.createPost);
router.put('/:id', validateToken, validationUpdate, controllerBlogPost.upDatePost);
router.delete('/:id', validateToken, controllerBlogPost.deletePostById);

module.exports = router;