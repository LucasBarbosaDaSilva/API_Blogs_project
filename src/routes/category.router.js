const express = require('express');

const router = express.Router();

const { controllerCategory } = require('../controllers');

const { validateToken } = require('../middlewares/tokenValidation.middleware');
const { validateName } = require('../middlewares/userValidation.middleware');

router.get('/', validateToken, controllerCategory.getAllCategories);
router.post('/', validateToken, validateName, controllerCategory.postCategory);

module.exports = router;