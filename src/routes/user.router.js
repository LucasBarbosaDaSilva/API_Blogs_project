const express = require('express');

const router = express.Router();

const { controllerUser } = require('../controllers');

// const { validateToken } = require('../middlewares/tokenValidation.middleware');

const { 
  validateEmail, validatePassword, validateDisplayName, validateUser,
} = require('../middlewares/userValidation.middleware');

router.post(
  '/', 
validateDisplayName,
 validateEmail, 
 validatePassword, 
 validateUser,
 controllerUser.postUser,
 );

 module.exports = router;