const express = require('express');

const { controllerLogin } = require('../controllers');

const { validationEmail, validatePassword } = require('../middlewares/loginValidation.middleware');

const router = express.Router();

router.post('/', validationEmail, validatePassword, controllerLogin.loginValidate);

module.exports = router;